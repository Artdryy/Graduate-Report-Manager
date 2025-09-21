import CompaniesValidator from '../validators/companies.validator.js';
import { handleError } from './error.middleware.js';

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

class CompaniesMiddleware {
  createCompany = validate(CompaniesValidator.createCompany());
  getCompanies = validate(CompaniesValidator.getCompanies());
  updateCompany = validate(CompaniesValidator.updateCompany());
  deleteCompany = validate(CompaniesValidator.deleteCompany());
}

export default new CompaniesMiddleware();