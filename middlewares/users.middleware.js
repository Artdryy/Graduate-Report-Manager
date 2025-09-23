import UsersValidator from '../validators/users.validator.js';
import { validate } from '../helpers/validator.helper.js';

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