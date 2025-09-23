import SemesterValidator from '../validators/semester.validator.js';
import { validate } from '../helpers/validator.helper.js';

class SemesterMiddleware {
  createSemester = validate(SemesterValidator.createSemester());
  getSemesters = validate(SemesterValidator.getSemesters());
  updateSemester = validate(SemesterValidator.updateSemester());
  deleteSemester = validate(SemesterValidator.deleteSemester());
}

export default new SemesterMiddleware();