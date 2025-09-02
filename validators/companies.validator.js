import Joi from 'joi';

const phoneRegex = /^[0-9+\-()\s]{5,30}$/; 

class CompaniesValidator {
  createCompany() {
    return Joi.object({
      company_name: Joi.string().max(150).trim().required(),
      description: Joi.string().required(),
      address: Joi.string().max(150).allow('', null),
      phone_number: Joi.string().pattern(phoneRegex).allow('', null),
      email: Joi.string().email().max(100).required(),
    });
  }

  getCompanies() {
    return Joi.object({});
  }

  updateCompany() {
    return Joi.object({
      company_id: Joi.number().required(),
      company_name: Joi.string().max(150).trim().required(),
      description: Joi.string().required(),
      address: Joi.string().max(150).allow('', null),
      phone_number: Joi.string().pattern(phoneRegex).allow('', null),
      email: Joi.string().email().max(100).required(),
    });
  }

  deleteCompany() {
    return Joi.object({
      company_id: Joi.number().required(),
    });
  }
}

export default new CompaniesValidator();
