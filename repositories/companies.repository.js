import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class CompaniesRepository {
  async createCompany({ company_name, description, address, phone_number, email }) {
    await sequelize.query(
      'call residencias.create_company(?, ?, ?, ?, ?);',
      { replacements: [company_name, description, address ?? null, phone_number ?? null, email] }
    );
    return { company_name, description, address: address ?? null, phone_number: phone_number ?? null, email };
  }

  async getCompanies() {
    const rows = await sequelize.query(
      'call residencias.get_companies();',
      { type: QueryTypes.SELECT }
    );
    return rows;
  }

  async updateCompany({ company_id, company_name, description, address, phone_number, email }) {
    await sequelize.query(
      'call residencias.update_company(?, ?, ?, ?, ?, ?);',
      { replacements: [company_id, company_name, description, address ?? null, phone_number ?? null, email] }
    );
    return { company_id, company_name, description, address: address ?? null, phone_number: phone_number ?? null, email };
  }

  async deleteCompany({ company_id }) {
    const result = await sequelize.query(
      'call residencias.delete_company(?);',
      { replacements: [company_id], type: QueryTypes.SELECT }
    );
    const message = Array.isArray(result) && result.length ? (result[0].message || 'Company deleted') : 'Company deleted';
    return { message };
  }
}

export default new CompaniesRepository();
