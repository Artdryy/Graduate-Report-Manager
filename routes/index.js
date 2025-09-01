import rolesRoutes from './roles.routes.js';
import healthRoutes from './health-check.routes.js';


export default async function fastifyRoutes(fastify, options) {
fastify.register(rolesRoutes, { prefix: '/roles' });
fastify.register(healthRoutes, { prefix: '/health-check' });
}