import PermissionsValidator from '../validators/permissions.validator.js';
import { handleError } from './error.middleware.js';

const validate = (validator) => async (req, reply) => {
  try {
    if (req.body && Object.keys(req.body).length > 0) {
      req.body = await validator.validateAsync(req.body);
    } else if (req.params && Object.keys(req.params).length > 0) {
      req.params = await validator.validateAsync(req.params);
    } else if (req.query && Object.keys(req.query).length > 0) {
      req.query = await validator.validateAsync(req.query);
    }
  } catch (err) {
    return handleError(err, req, reply);
  }
};

class PermissionsMiddleware {
  createPermission = validate(PermissionsValidator.createPermission());
  getPermissions = validate(PermissionsValidator.getPermissions());
  updatePermission = validate(PermissionsValidator.updatePermission());
  deletePermission = validate(PermissionsValidator.deletePermission());
}

export default new PermissionsMiddleware();