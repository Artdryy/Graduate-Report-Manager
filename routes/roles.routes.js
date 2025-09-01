import RolesController from '../controllers/roles.controller.js';
import RolesMiddleware from '../middlewares/roles.middleware.js';

async function RolesRoutes (fastify, options) {
    // Create role.
    fastify.post(
        '/roles', 
        { preHandler: RolesMiddleware.createRole }, 
        RolesController.createRole
    );
}

export default RolesRoutes;