import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class RolesRepository {
  async createRole({ role_name, description }) {
    await sequelize.query(
      'call residencias.create_role(?, ?);',
      { replacements: [role_name, description] }
    );
    return { role_name, description };
  }

  async getRoles() {
    const rows = await sequelize.query(
      'call residencias.get_roles();',
      { type: QueryTypes.SELECT }
    );
    return rows;
  }

  async updateRole({ role_id, role_name, description }) {
    await sequelize.query(
      'call residencias.update_role(?, ?, ?);',
      { replacements: [role_id, role_name, description] }
    );
    return { role_id, role_name, description };
  }

  async deleteRole({ role_id }) {
    await sequelize.query(
      'call residencias.delete_role(?);',
      { replacements: [role_id] }
    );
    return { role_id };
  } 
}

export default new RolesRepository();