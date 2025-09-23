import Joi from 'joi';

class ReportsValidator {
  createReport() {
    return Joi.object({
      student_name: Joi.string().max(100).required(),
      control_number: Joi.string().max(15).required(),
      major: Joi.string().max(100).allow(null, ''),
      report_title: Joi.string().max(255).allow(null, ''),
      company_id: Joi.number().required(),
      semester_id: Joi.number().required(),
      keywords: Joi.string().custom((value, helpers) => {
        try {
          const parsed = JSON.parse(value);
          if (!Array.isArray(parsed) || !parsed.every(Number.isInteger)) {
            return helpers.error('any.invalid');
          }
          return parsed; 
        } catch (e) {
          return helpers.error('any.invalid');
        }
      }).optional().default('[]'),
    });
  }

  updateReport() {
    return Joi.object({
      report_id: Joi.number().required(),
      student_name: Joi.string().max(100).required(),
      report_title: Joi.string().max(255).allow(null, ''),
      company_id: Joi.number().required(),
      semester_id: Joi.number().required(),
      keywords: Joi.string().custom((value, helpers) => {
        try {
          const parsed = JSON.parse(value);
          if (!Array.isArray(parsed) || !parsed.every(Number.isInteger)) {
            return helpers.error('any.invalid');
          }
          return parsed;
        } catch (e) {
          return helpers.error('any.invalid');
        }
      }).optional(),
    });
  }

  deleteReport() {
    return Joi.object({
      report_id: Joi.number().required(),
    });
  }
}

export default new ReportsValidator();