import RolesValidator from '../validators/roles.validator.js';
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

class RolesMiddleware {
  createRole = validate(RolesValidator.createRole());
  getRoles = validate(RolesValidator.getRoles());
  updateRole = validate(RolesValidator.updateRole());
  deleteRole = validate(RolesValidator.deleteRole());
}

export default new RolesMiddleware();