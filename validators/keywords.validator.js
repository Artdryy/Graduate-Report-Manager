import Joi from 'joi';

class KeywordsValidator {
  createKeyword() {
    return Joi.object({
      keyword: Joi.string().max(30).trim().required(),
    });
  }

  getKeywords() {
    return Joi.object({});
  }

  updateKeyword() {
    return Joi.object({
      keyword_id: Joi.number().required(),
      keyword: Joi.string().max(30).trim().required(),
    });
  }

  deleteKeyword() {
    return Joi.object({
      keyword_id: Joi.number().required(),
    });
  }
}

export default new KeywordsValidator();
