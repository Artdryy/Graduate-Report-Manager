import ModulesValidator from "../validators/modules.validator.js";
import { handleError } from "./error.middleware.js";

class ModulesMiddleware {
  createModule = async (req, reply) => {
    try {
      req.body = await ModulesValidator.createModule().validateAsync(req.body);
    } catch (err) {
      return handleError(err, req, reply);
    }
  };

  getModules = async (req, reply) => {
    try {
      req.query = await ModulesValidator.getModules().validateAsync(req.query);
    } catch (err) {
      return handleError(err, req, reply);
    }
  };

  updateModule = async (req, reply) => {
    try {
      req.body = await ModulesValidator.updateModule().validateAsync(req.body);
    } catch (err) {
      return handleError(err, req, reply);
    }
  };

  deleteModule = async (req, reply) => {
    try {
      req.params = await ModulesValidator.deleteModule().validateAsync(req.params);
    } catch (err) {
      return handleError(err, req, reply);
    }
  };
}

export default new ModulesMiddleware();
