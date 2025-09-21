import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class SemesterRepository {
  async createSemester({ semester }) {
    const result = await sequelize.query(
      'CALL residencias.create_semester(?);',
      {
        replacements: [semester],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }

  async getSemesters() {
    const result = await sequelize.query(
      'CALL residencias.get_semesters();',
      {
        type: QueryTypes.SELECT
      }
    );
    return result[0];
  }

  async updateSemester({ semester_id, semester }) {
    const result = await sequelize.query(
      'CALL residencias.update_semester(?, ?);',
      {
        replacements: [semester_id, semester],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }

  async deleteSemester({ semester_id }) {
    const result = await sequelize.query(
      'CALL residencias.delete_semester(?);',
      {
        replacements: [semester_id],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }
}

export default new SemesterRepository();