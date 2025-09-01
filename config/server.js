const fastify = require('fastify');
const fastifyCompress = require('@fastify/compress');
const fastifyHelmet = require('@fastify/helmet');
const fastifyCors = require('@fastify/cors');
const fastifyFormbody = require('@fastify/formbody');

const { envValues } = require('./envSchema');
const { validateApiKey } = require('../middlewares/auth.middleware');

const createServer = () => {
  const app = fastify({
    logger: envValues.NODE_ENV === 'production' ? 'info' : 'debug',
    bodyLimit: 50 * 1024 * 1024,
  });

  // Plugins base
  app.register(fastifyCompress);
  app.register(fastifyHelmet, { contentSecurityPolicy: false });
  app.register(fastifyCors, {
    origin: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'api-key'],
    credentials: true,
  });
  app.register(fastifyFormbody);

  // Hook de autenticación por API Key (excepto preflight)
  app.addHook('onRequest', (request, reply, done) => {
    if (request.raw.method === 'OPTIONS') return done();
    return validateApiKey(request, reply).then(() => done()).catch(done);
  });

  // Health check directo (sin routes/index.js para mantenerlo simple)
  app.register(require('../routes/health-check.routes'), { prefix: '/api/health-check' });

  // ---- Handlers de error/not found ----
  app.setErrorHandler((err, request, reply) => {
    request.log?.error?.(err);
    const statusCode = err.statusCode || 500;
    reply.status(statusCode).send({
      status: false,
      message: err.message || 'Internal Server Error',
      data: null,
    });
  });

  app.setNotFoundHandler((request, reply) => {
    reply.status(404).send({
      status: false,
      message: 'Not Found',
      data: null,
    });
  });

  // Helper para respuestas exitosas
  app.decorateReply('sendSuccess', function ({ status = true, statusCode = 200, message = 'Success', data = null } = {}) {
    this.status(statusCode).send({ status, message, data });
  });

  return app;
};

module.exports = createServer;
