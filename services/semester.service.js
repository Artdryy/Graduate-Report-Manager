import SemesterRepository from '../repositories/semester.repository.js';
import { catchError } from '../helpers/catch.error.js';

class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class SemesterService {
  async createSemester(data) {
    const [result, error] = await catchError(SemesterRepository.createSemester(data));
    if (error) throw error;
    return result;
  }

  async getSemesters() {
    const [result, error] = await catchError(SemesterRepository.getSemesters());
    if (error) throw error;
    return result;
  }

  async updateSemester(data) {
    const [result, error] = await catchError(SemesterRepository.updateSemester(data));
    if (error) throw error;
    return result;
  }

  async deleteSemester(data) {
    const [result, error] = await catchError(SemesterRepository.deleteSemester(data));
    if (error) throw error;
    return result;
  }
}

export default new SemesterService();