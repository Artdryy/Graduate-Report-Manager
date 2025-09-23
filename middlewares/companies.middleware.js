import CompaniesValidator from '../validators/companies.validator.js';
import { validate } from '../helpers/validator.helper.js';

class CompaniesMiddleware {
  createCompany = validate(CompaniesValidator.createCompany());
  getCompanies = validate(CompaniesValidator.getCompanies());
  updateCompany = validate(CompaniesValidator.updateCompany());
  deleteCompany = validate(CompaniesValidator.deleteCompany());
}

export default new CompaniesMiddleware();