import KeywordsValidator from '../validators/keywords.validator.js';
import { validate } from '../helpers/validator.helper.js';

class KeywordsMiddleware {
  createKeyword = validate(KeywordsValidator.createKeyword());
  getKeywords = validate(KeywordsValidator.getKeywords());
  updateKeyword = validate(KeywordsValidator.updateKeyword());
  deleteKeyword = validate(KeywordsValidator.deleteKeyword());
}

export default new KeywordsMiddleware();