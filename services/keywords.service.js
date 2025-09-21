import KeywordsRepository from '../repositories/keywords.repository.js';
import { catchError } from '../helpers/catch.error.js';

class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class KeywordsService {
  async createKeyword(data) {
    const [result, error] = await catchError(KeywordsRepository.createKeyword(data));
    if (error) throw error;
    return result;
  }

  async getKeywords() {
    const [result, error] = await catchError(KeywordsRepository.getKeywords());
    if (error) throw error;
    return result;
  }

  async updateKeyword(data) {
    const [result, error] = await catchError(KeywordsRepository.updateKeyword(data));
    if (error) throw error;
    return result;
  }

  async deleteKeyword(data) {
    const [result, error] = await catchError(KeywordsRepository.deleteKeyword(data));
    if (error) throw error;
    return result;
  }
}

export default new KeywordsService();