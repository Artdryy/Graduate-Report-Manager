import RolesValidator from '../validators/roles.validator.js';
import { validate } from '../helpers/validator.helper.js';

class RolesMiddleware {
  createRole = validate(RolesValidator.createRole());
  getRoles = validate(RolesValidator.getRoles());
  updateRole = validate(RolesValidator.updateRole());
  deleteRole = validate(RolesValidator.deleteRole());
}

export default new RolesMiddleware();