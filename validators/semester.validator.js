import Joi from 'joi';

class SemesterValidator {
  createSemester() {
    return Joi.object({
      semester: Joi.string().max(30).trim().required(),
    });
  }

  getSemesters() {
    return Joi.object({});
  }

  updateSemester() {
    return Joi.object({
      semester_id: Joi.number().required(),
      semester: Joi.string().max(30).trim().required(),
    });
  }

  deleteSemester() {
    return Joi.object({
      semester_id: Joi.number().required(),
    });
  }
}

export default new SemesterValidator();