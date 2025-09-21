import PermissionsService from '../services/permissions.service.js';

class PermissionsController {
  createPermission = async (req, reply) => {
    const { permission } = req.body;
    const result = await PermissionsService.createPermission({ permission });
    reply.code(201).sendSuccess({ message: 'Permission created', data: result });
  };

  getPermissions = async (req, reply) => {
    const result = await PermissionsService.getPermissions();
    reply.sendSuccess({ message: 'Permissions fetched', data: result });
  };

  updatePermission = async (req, reply) => {
    const { permission_id, permission } = req.body;
    const result = await PermissionsService.updatePermission({ permission_id, permission });
    reply.sendSuccess({ message: 'Permission updated', data: result });
  };

  deletePermission = async (req, reply) => {
    const { permission_id } = req.params;
    const result = await PermissionsService.deletePermission({ permission_id });
    reply.sendSuccess({ message: result.message || 'Permission deleted', data: null });
  };
}

export default new PermissionsController();