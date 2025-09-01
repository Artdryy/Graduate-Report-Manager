// middlewares/auth.middleware.js
import { globalConfig } from '../config/env.js';

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

export { validateApiKey };
