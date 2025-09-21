import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class CompaniesRepository {
  async createCompany({ company_name, description, address, phone_number, email }) {
    const result = await sequelize.query(
      'CALL residencias.create_company(?, ?, ?, ?, ?);',
      {
        replacements: [company_name, description, address, phone_number, email],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }

  async getCompanies() {
    const result = await sequelize.query(
      'CALL residencias.get_companies();',
      {
        type: QueryTypes.SELECT
      }
    );
    return result[0];
  }

  async updateCompany({ company_id, company_name, description, address, phone_number, email }) {
    const result = await sequelize.query(
      'CALL residencias.update_company(?, ?, ?, ?, ?, ?);',
      {
        replacements: [company_id, company_name, description, address, phone_number, email],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }

  async deleteCompany({ company_id }) {
    const result = await sequelize.query(
      'CALL residencias.delete_company(?);',
      {
        replacements: [company_id],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }
}

export default new CompaniesRepository();