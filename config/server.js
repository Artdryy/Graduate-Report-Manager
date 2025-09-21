import Fastify from 'fastify';

import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import compress from '@fastify/compress';
import fastifyFormbody from '@fastify/formbody';

import router from '../routes/index.js';  
import { handleError, handleNotFound } from '../middlewares/error.middleware.js';  

import UsersMiddleware from '../middlewares/users.middleware.js';  

import { applyGlobalAuth } from '../middlewares/auth.middleware.js';

const fastify = Fastify({
  logger: true,
  bodyLimit: 50 * 1024 * 1024,
});

// Middlewares de seguridad y parsing
fastify.register(fastifyHelmet, { contentSecurityPolicy: false });
fastify.register(fastifyCors,   { origin: true, optionsSuccessStatus: 200 });
fastify.register(fastifyFormbody);
fastify.register(compress);

// Decoraciones para los middleware
fastify.decorate('usersMiddleware', UsersMiddleware)

// Método helper para respuestas exitosas
fastify.decorateReply('sendSuccess', function({
  status     = true,
  statusCode = 200,
  message    = 'Operación exitosa',
  data       = null,
}) {
  this.status(statusCode).send({ status, message, data });
});

// =========================== //
// 🔒 Aplica protección global //
// =========================== //
applyGlobalAuth(fastify, {
  useApiKey: true, // true si quieres validar también API Key
  publicRoutes: [
    '/api/users/login',
    '/api/users/refresh-token',
    '/api/users/logout',
    '/api/users/request-password-reset',
    '/api/users/reset-password'        
  ]
});

// Rutas bajo /api
fastify.register(router, { prefix: '/api' });

// Handlers de error y ruta no encontrada
fastify.setErrorHandler(handleError);
fastify.setNotFoundHandler(handleNotFound);

// Ruta raíz de comprobación
fastify.get('/', async (request, reply) => {
  return reply.sendSuccess({
    message: 'API is running',
    data: {}
  });
});

export default fastify;
