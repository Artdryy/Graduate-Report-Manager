import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class ModulesRepository {
  async createModule({ module_name }) {
    const result = await sequelize.query(
      'CALL residencias.create_module(?);',
      {
        replacements: [module_name],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }

  async getModules() {
    const result = await sequelize.query(
      'CALL residencias.get_modules();',
      {
        type: QueryTypes.SELECT
      }
    );
    return result[0];
  }

  async updateModule({ module_id, module_name }) {
    const result = await sequelize.query(
      'CALL residencias.update_module(?, ?);',
      {
        replacements: [module_id, module_name],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }

  async deleteModule({ module_id }) {
    const result = await sequelize.query(
      'CALL residencias.delete_module(?);',
      {
        replacements: [module_id],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }
}

export default new ModulesRepository();