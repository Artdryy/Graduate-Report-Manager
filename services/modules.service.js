import ModulesRepository from '../repositories/modules.repository.js';
import { catchError } from '../helpers/catch.error.js';

class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class ModulesService {
  async createModule(data) {
    const [result, error] = await catchError(ModulesRepository.createModule(data));
    if (error) throw error;
    return result;
  }

  async getModules() {
    const [result, error] = await catchError(ModulesRepository.getModules());
    if (error) throw error;
    return result;
  }

  async updateModule(data) {
    const [result, error] = await catchError(ModulesRepository.updateModule(data));
    if (error) throw error;
    return result;
  }

  async deleteModule(data) {
    const [result, error] = await catchError(ModulesRepository.deleteModule(data));
    if (error) throw error;
    return result;
  }
}

export default new ModulesService();