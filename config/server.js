import Fastify from 'fastify';
import { envConfig } from '../config/env.js';
import { authenticate } from '../config/database.js';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import compress from '@fastify/compress';
import fastifyFormbody from '@fastify/formbody';

import router from '../routes/index.js';  // Add `.js`
import { handleError, handleNotFound } from '../middlewares/error.middleware.js';  // Add `.js`

import RolesMiddleware from '../middlewares/roles.middleware.js';  // Add `.js`
import CompaniesMiddleware from '../middlewares/companies.middleware.js';  // Add `.js`
import ModulesMiddleware from '../middlewares/modules.middleware.js';  // Add `.js`

const fastify = Fastify({
  logger: true,
  bodyLimit: 50 * 1024 * 1024,
})

// Middlewares de seguridad y parsing
fastify.register(fastifyHelmet, { contentSecurityPolicy: false })
fastify.register(fastifyCors,   { origin: true, optionsSuccessStatus: 200 })
fastify.register(fastifyFormbody)
fastify.register(compress)

// Decoraciones para los middleware
fastify.decorate('rolesMiddleware', RolesMiddleware)
fastify.decorate('companiesMiddleware', CompaniesMiddleware)
fastify.decorate('modulesMiddleware', ModulesMiddleware)


// Método helper para respuestas exitosas
fastify.decorateReply('sendSuccess', function({
  status     = true,
  statusCode = 200,
  message    = 'Operación exitosa',
  data       = null,
}) {
  this.status(statusCode).send({ status, message, data })
})

// Rutas bajo /api
fastify.register(router, { prefix: '/api' })

// Handlers de error y ruta no encontrada
fastify.setErrorHandler(handleError)
fastify.setNotFoundHandler(handleNotFound)

// Ruta raíz de comprobación
fastify.get('/', async (request, reply) => {
  return reply.sendSuccess({
    message: 'API is running',
    data: {}
  })
})

// Exporting the Fastify instance as the server
export default fastify;  // Default export
