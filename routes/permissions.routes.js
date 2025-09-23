import PermissionsController from '../controllers/permissions.controller.js';
import PermissionsMiddleware from '../middlewares/permissions.middleware.js';
import { checkPermission } from '../middlewares/authorization.middleware.js';

export default async function permissionsRoutes(fastify) {
  fastify.post('/create', { preHandler: [PermissionsMiddleware.createPermission, checkPermission('Permissions', 'CREATE')] }, PermissionsController.createPermission);
  fastify.get('/list', { preHandler: [PermissionsMiddleware.getPermissions, checkPermission('Permissions', 'READ')] }, PermissionsController.getPermissions);
  fastify.put('/update', { preHandler: [PermissionsMiddleware.updatePermission, checkPermission('Permissions', 'UPDATE')] }, PermissionsController.updatePermission);
  fastify.delete('/delete/:permission_id', { preHandler: [PermissionsMiddleware.deletePermission, checkPermission('Permissions', 'DELETE')] }, PermissionsController.deletePermission);

  fastify.get('/role/:role_id', { preHandler: [PermissionsMiddleware.getPermissionsForRole, checkPermission('Permissions', 'READ')] }, PermissionsController.getPermissionsForRole);

  fastify.post('/assign-to-role', { preHandler: [PermissionsMiddleware.assignPermissions, checkPermission('Permissions', 'UPDATE')] }, PermissionsController.assignPermissionsToRole);
}