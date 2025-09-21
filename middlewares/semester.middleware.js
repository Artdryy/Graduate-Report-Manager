import SemesterValidator from '../validators/semester.validator.js';
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

class SemesterMiddleware {
  createSemester = validate(SemesterValidator.createSemester());
  getSemesters = validate(SemesterValidator.getSemesters());
  updateSemester = validate(SemesterValidator.updateSemester());
  deleteSemester = validate(SemesterValidator.deleteSemester());
}

export default new SemesterMiddleware();