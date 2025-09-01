import { handleError } from '../middlewares/error.middleware.js';
import RolesValidator from '../validators/roles.validator.js';

class RolesMiddleware {
  createRole = async (request, reply) => {
    try {
      request.createRole = await RolesValidator.createRole().validateAsync({ ...request.body });
    } catch (error) {
      return handleError(error, request, reply);
    }
  };
}

export default new RolesMiddleware();