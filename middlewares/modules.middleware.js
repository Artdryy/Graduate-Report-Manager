import ModulesValidator from '../validators/modules.validator.js';
import { validate } from '../helpers/validator.helper.js';

class ModulesMiddleware {
  createModule = validate(ModulesValidator.createModule());
  getModules = validate(ModulesValidator.getModules());
  updateModule = validate(ModulesValidator.updateModule());
  deleteModule = validate(ModulesValidator.deleteModule());
}

export default new ModulesMiddleware();