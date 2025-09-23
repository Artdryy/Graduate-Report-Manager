import AuthorizationRepository from '../repositories/authorization.repository.js';

class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const checkPermission = (moduleName, permissionName) => {
  return async (req, reply) => {
    if (!req.user || !req.user.roleId) {
      throw new HttpError('Authentication error: User role not found.', 401);
    }

    const { roleId } = req.user;

    const hasPermission = await AuthorizationRepository.checkRolePermission({
      role_id: roleId,
      module_name: moduleName,
      permission_name: permissionName,
    });

    if (!hasPermission) {
      throw new HttpError('Forbidden: You do not have permission to perform this action.', 403);
    }
  };
};