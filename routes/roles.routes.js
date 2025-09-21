import RolesController from '../controllers/roles.controller.js';
import RolesMiddleware from '../middlewares/roles.middleware.js';

export default async function rolesRoutes(fastify) {
  // All routes require authentication (private routes)
  fastify.post('/create', { preHandler: RolesMiddleware.createRole }, RolesController.createRole);
  fastify.get('/list', { preHandler: RolesMiddleware.getRoles }, RolesController.getRoles);
  fastify.put('/update', { preHandler: RolesMiddleware.updateRole }, RolesController.updateRole);
  fastify.delete('/delete/:role_id', { preHandler: RolesMiddleware.deleteRole }, RolesController.deleteRole);
}