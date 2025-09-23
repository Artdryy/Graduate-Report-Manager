import ReportsValidator from '../validators/reports.validator.js';
import { validate } from '../helpers/validator.helper.js';

class ReportsMiddleware {
  createReport = validate(ReportsValidator.createReport());
  updateReport = validate(ReportsValidator.updateReport());
  deleteReport = validate(ReportsValidator.deleteReport());
}

export default new ReportsMiddleware();