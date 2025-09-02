import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class ModulesRepository {
  async createModule({ module_name }) {
    await sequelize.query(
      'call residencias.create_module(?);',
      { replacements: [module_name] }
    );
    return { module_name };
  }

  async getModules() {
    const rows = await sequelize.query(
      'call residencias.get_modules();',
      { type: QueryTypes.SELECT }
    );
    return rows;
  }

  async updateModule({ module_id, module_name }) {
    await sequelize.query(
      'call residencias.update_module(?, ?);',
      { replacements: [module_id, module_name] }
    );
    return { module_id, module_name };
  }

  async deleteModule({ module_id }) {
    const result = await sequelize.query(
      'call residencias.delete_module(?);',
      { replacements: [module_id], type: QueryTypes.SELECT }
    );
    const message = Array.isArray(result) && result.length ? (result[0].message || 'Module deleted') : 'Module deleted';
    return { message };
  }
}

export default new ModulesRepository();
