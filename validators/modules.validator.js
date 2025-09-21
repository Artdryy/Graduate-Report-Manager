import Joi from 'joi';

class ModulesValidator {
  createModule() {
    return Joi.object({
      module_name: Joi.string().max(20).trim().required(),
    });
  }

  getModules() {
    return Joi.object({});
  }

  updateModule() {
    return Joi.object({
      module_id: Joi.number().required(),
      module_name: Joi.string().max(20).trim().required(),
    });
  }

  deleteModule() {
    return Joi.object({
      module_id: Joi.number().required(),
    });
  }
}

export default new ModulesValidator();