import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class AuthorizationRepository {
  async checkRolePermission({ role_id, module_name, permission_name }) {
    const result = await sequelize.query(
      'CALL residencias.check_role_permission(?, ?, ?);',
      {
        replacements: [role_id, module_name, permission_name],
        type: QueryTypes.SELECT,
      }
    );
    return result[0][0].granted === 1;
  }
}

export default new AuthorizationRepository();