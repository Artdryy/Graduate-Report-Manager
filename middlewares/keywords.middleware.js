import KeywordsValidator from '../validators/keywords.validator.js';
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

class KeywordsMiddleware {
  // CRUD Operations Middleware
  createKeyword = validate(KeywordsValidator.createKeyword());
  getKeywords = validate(KeywordsValidator.getKeywords());
  updateKeyword = validate(KeywordsValidator.updateKeyword());
  deleteKeyword = validate(KeywordsValidator.deleteKeyword());
}

export default new KeywordsMiddleware();