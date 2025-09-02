import rolesRoutes from './roles.routes.js';
import healthRoutes from './health-check.routes.js';
import companiesRoutes from './companies.routes.js';
import modulesRoutes from './modules.routes.js';


export default async function fastifyRoutes(fastify, options) {
fastify.register(rolesRoutes, { prefix: '/roles' });
fastify.register(companiesRoutes, { prefix: '/companies' });
fastify.register(modulesRoutes, { prefix: '/modules' });
fastify.register(healthRoutes, { prefix: '/health-check' });
} 