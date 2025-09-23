import PermissionsValidator from '../validators/permissions.validator.js';
import { validate } from '../helpers/validator.helper.js';

class PermissionsMiddleware {
  createPermission = validate(PermissionsValidator.createPermission());
  getPermissions = validate(PermissionsValidator.getPermissions());
  updatePermission = validate(PermissionsValidator.updatePermission());
  deletePermission = validate(PermissionsValidator.deletePermission());
  assignPermissions = validate(PermissionsValidator.assignPermissions());
  getPermissionsForRole = validate(PermissionsValidator.getPermissionsForRole());
}

export default new PermissionsMiddleware();