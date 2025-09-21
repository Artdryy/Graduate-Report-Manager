import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class RolesRepository {
  // Llama al SP para crear un nuevo rol.
  async createRole({ role_name, description }) {
    const result = await sequelize.query(
      'CALL residencias.create_role(?, ?);',
      {
        replacements: [role_name, description],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0]; // Devuelve el { id: new_id }
  }

  // Llama al SP para obtener todos los roles.
  async getRoles() {
    const rows = await sequelize.query(
      'CALL residencias.get_roles();',
      { type: QueryTypes.SELECT }
    );
    return rows[0]; // Los SP suelen devolver un array extra
  }

  // Llama al SP para actualizar un rol.
  async updateRole({ role_id, role_name, description }) {
    await sequelize.query(
      'CALL residencias.update_role(?, ?, ?);',
      { replacements: [role_id, role_name, description] }
    );
    return { role_id, role_name, description };
  }

  // Llama al SP para eliminar un rol.
  async deleteRole({ role_id }) {
    const result = await sequelize.query(
      'CALL residencias.delete_role(?);',
      {
        replacements: [role_id],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0]; // Devuelve el { message: '...' }
  }
}

export default new RolesRepository();
