import Joi from 'joi';

class PermissionsValidator {
  createPermission() {
    return Joi.object({
      permission: Joi.string().max(50).trim().required(),
    });
  }

  getPermissions() {
    return Joi.object({});
  }

  updatePermission() {
    return Joi.object({
      permission_id: Joi.number().required(),
      permission: Joi.string().max(50).trim().required(),
    });
  }

  deletePermission() {
    return Joi.object({
      permission_id: Joi.number().required(),
    });
  }
}

export default new PermissionsValidator();