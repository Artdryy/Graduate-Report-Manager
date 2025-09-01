import Joi from 'joi';


class RolesValidator {
createRole = () =>
    Joi.object({
        role_name: Joi.string().trim().min(3).max(50).required(),
        role_description: Joi.string().trim().min(5).max(255).optional().allow(null, ''),
    }).options({ allowUnknown: false, stripUnknown: true });
}


export default new RolesValidator();