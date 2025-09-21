import { globalConfig } from '../config/env.js';
import jwt from 'jsonwebtoken';
import { envValues } from '../config/envSchema.js';

// Middleware para validar API Key
async function validateApiKey(request, reply) {
  try {
    const apiKey = request.headers['api-key'] || (request.headers.authorization || '').replace(/^Bearer\s+/i, '');
    if (!globalConfig.apiKey) return;

    if (!apiKey || apiKey !== globalConfig.apiKey) {
      return reply.status(401).send({ status: false, message: 'Unauthorized', data: null });
    }
  } catch (err) {
    request.log?.error?.(err);
    return reply.status(500).send({ status: false, message: 'API Key validation failed', data: null });
  }
}

// Middleware para validar JWT
async function validateJWT(request, reply) {
  try {
    const authHeader = request.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '');

    if (!token) {
      return reply.status(401).send({ status: false, message: 'No token provided', data: null });
    }

    try {
      const decoded = jwt.verify(token, envValues.JWT_SECRET);
      request.user = {
        userId: decoded.userId,
        roleId: decoded.roleId,
      };
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return reply.status(401).send({ status: false, message: 'Token expired', data: null });
      }
      return reply.status(401).send({ status: false, message: 'Invalid token', data: null });
    }
  } catch (err) {
    request.log?.error?.(err);
    // Cambiado para ser más específico que el error es probablemente interno al middleware
    return reply.status(500).send({ status: false, message: 'Authentication middleware error', data: null });
  }
}

// Hook global para proteger todas las rutas
function applyGlobalAuth(fastify, options = {}) {
  const { useApiKey = false, publicRoutes = [] } = options;

  fastify.addHook('onRequest', async (request, reply) => {
    // --- CAMBIO CLAVE AQUÍ ---
    // Usamos request.url en lugar de request.routerPath
    const requestedUrl = request.url.split('?')[0]; // Quitamos query params por si acaso
    console.log('Ruta solicitada por Fastify:', requestedUrl);
    // -------------------------

    // Saltar rutas públicas
    if (publicRoutes.includes(requestedUrl)) {
      console.log('Ruta pública detectada. Saltando validación de JWT.');
      return; // Permite que la petición continúe sin validación
    }

    // Validar JWT siempre (si no es pública)
    await validateJWT(request, reply);

    // Validar API Key opcionalmente
    if (useApiKey) {
      await validateApiKey(request, reply);
    }
  });
}

export { validateApiKey, validateJWT, applyGlobalAuth };
