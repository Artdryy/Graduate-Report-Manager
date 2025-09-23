import { handleError } from '../middlewares/error.middleware.js';

export const validate = (validator) => async (req, reply) => {
  try {
    const dataToValidate = req.body || req.params || req.query;

    if (dataToValidate && Object.keys(dataToValidate).length > 0) {
      const validatedData = await validator.validateAsync(dataToValidate, {
        abortEarly: false, 
        stripUnknown: true 
      });

      if (req.body) req.body = validatedData;
      else if (req.params) req.params = validatedData;
      else if (req.query) req.query = validatedData;
    }
  } catch (err) {
    return handleError(err, req, reply);
  }
};