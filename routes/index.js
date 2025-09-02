import rolesRoutes from './roles.routes.js';
import healthRoutes from './health-check.routes.js';
import companiesRoutes from './companies.routes.js';
import modulesRoutes from './modules.routes.js';
import keywordsRoutes from './keywords.routes.js';
import semestersRoutes from './semesters.routes.js';
import permissionsRoutes from './routes/permissions.routes.js';
import usersRoutes from './routes/users.routes.js';

export default async function fastifyRoutes(fastify, options) {
    fastify.register(rolesRoutes, { prefix: '/roles' });
    fastify.register(companiesRoutes, { prefix: '/companies' });
    fastify.register(modulesRoutes, { prefix: '/modules' });
    fastify.register(keywordsRoutes, { prefix: '/keywords' });
    fastify.register(semestersRoutes, { prefix: '/semesters' });
    fastify.register(healthRoutes, { prefix: '/health-check' });
    fastify.register(permissionsRoutes, { prefix: '/permissions' });
    fastify.register(usersRoutes, { prefix: '/users' });
}
