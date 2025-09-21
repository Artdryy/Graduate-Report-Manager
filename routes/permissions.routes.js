import PermissionsController from '../controllers/permissions.controller.js';
import PermissionsMiddleware from '../middlewares/permissions.middleware.js';

export default async function permissionsRoutes(fastify) {
  // All routes require authentication (private routes)
  fastify.post('/create', { preHandler: PermissionsMiddleware.createPermission }, PermissionsController.createPermission);
  fastify.get('/list', { preHandler: PermissionsMiddleware.getPermissions }, PermissionsController.getPermissions);
  fastify.put('/update', { preHandler: PermissionsMiddleware.updatePermission }, PermissionsController.updatePermission);
  fastify.delete('/delete/:permission_id', { preHandler: PermissionsMiddleware.deletePermission }, PermissionsController.deletePermission);
}