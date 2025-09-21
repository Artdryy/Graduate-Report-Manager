import UsersValidator from '../validators/users.validator.js';
import { handleError } from './error.middleware.js';

// Función helper para no repetir el try-catch
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

class UsersMiddleware {
  // --- Middlewares para Rutas Privadas ---
  createUser = validate(UsersValidator.createUser());
  getUsers = validate(UsersValidator.getUsers());
  updateUser = validate(UsersValidator.updateUser());
  deleteUser = validate(UsersValidator.deleteUser());

  // --- Middlewares para Rutas Públicas ---
  loginUser = validate(UsersValidator.loginUser());
  
  requestPasswordReset = validate(UsersValidator.requestPasswordReset());
  resetPassword = validate(UsersValidator.resetPassword());
  refreshToken = validate(UsersValidator.refreshToken());
  logout = validate(UsersValidator.logout());
}

export default new UsersMiddleware();