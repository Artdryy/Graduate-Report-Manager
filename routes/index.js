import usersRoutes from './users.routes.js';
import rolesRoutes from './roles.routes.js';
import companiesRoutes from './companies.routes.js';
import modulesRoutes from './modules.routes.js';
import permissionsRoutes from './permissions.routes.js';
import semesterRoutes from './semester.routes.js';
import keywordsRoutes from './keywords.routes.js';

export default async function fastifyRoutes(fastify, options) {
    // Users Routes
    fastify.register(usersRoutes, { prefix: '/users' });
    
    // Roles Routes
    fastify.register(rolesRoutes, { prefix: '/roles' });
    
    // Companies Routes
    fastify.register(companiesRoutes, { prefix: '/companies' });
    
    // Modules Routes
    fastify.register(modulesRoutes, { prefix: '/modules' });
    
    // Permissions Routes
    fastify.register(permissionsRoutes, { prefix: '/permissions' });
    
    // Semester Routes
    fastify.register(semesterRoutes, { prefix: '/semester' });
    
    // Keywords Routes
    fastify.register(keywordsRoutes, { prefix: '/keywords' });
}
