import { sequelize } from '../config/database.js';
import bcrypt from 'bcrypt';
import { QueryTypes } from 'sequelize';

class UsersRepository {
  async createUser({ user_name, password, email, role_id, is_active, code }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await sequelize.query(
      'CALL residencias.create_user(?, ?, ?, ?, ?, ?);',
      {
        replacements: [user_name, hashedPassword, email, role_id, is_active, code || null],
        type: QueryTypes.SELECT
      }
    );
    const insertedId = result[0][0].id;
    return { id: insertedId, user_name, email, role_id };
  }

  async getUsers() {
    const result = await sequelize.query('CALL residencias.get_users();', {
        type: QueryTypes.SELECT
    });
    return result[0];
  }

  async updateUser({ user_id, user_name, email, role_id, is_active }) {
    const result = await sequelize.query(
      'CALL residencias.update_user(?, ?, ?, ?, ?);',
      {
        replacements: [user_id, user_name, email, role_id, is_active],
        type: QueryTypes.SELECT
      }
    );
    const updatedId = result[0][0].id;
    return { id: updatedId, user_name, email, role_id, is_active };
  }

  async deleteUser({ user_id }) {
    const result = await sequelize.query(
      'CALL residencias.delete_user(?);',
      { replacements: [user_id], type: QueryTypes.SELECT }
    );
    const message = Array.isArray(result) && result.length ? (result[0][0].message || 'User deleted') : 'User deleted';
    return { message };
  }

  async changePassword({ user_id, new_password, code }) {
    const hashedPassword = await bcrypt.hash(new_password, 10);
    const result = await sequelize.query(
      'CALL residencias.change_password(?, ?, ?);',
      { replacements: [user_id, hashedPassword, code], type: QueryTypes.SELECT }
    );
    return { message: result[0][0].message };
  }

  async generateCode({ user_id }) {
    const result = await sequelize.query(
      'CALL residencias.generate_code(?);',
      { replacements: [user_id], type: QueryTypes.SELECT }
    );
    return { code: result[0][0].code };
  }

  async findUserByName({ user_name }) {
      const result = await sequelize.query(
        'CALL residencias.find_user_by_name(?);',
        {
          replacements: [ user_name ],
          type: QueryTypes.SELECT,
        }
      );
      return result.length > 0 ? result[0][0] : null;
  }

  async saveRefreshToken(userId, token, expiresAt) {
    await sequelize.query(
      'CALL residencias.create_refresh_token(?, ?, ?);',
      { replacements: [userId, token, expiresAt] }
    );
  }

  async findUserByRefreshToken(token) {
    const result = await sequelize.query(
      'CALL residencias.find_user_by_refresh_token(?);',
      {
        replacements: [token],
        type: QueryTypes.SELECT
      }
    );
    return result.length > 0 ? result[0][0] : null;
  }

  async deleteRefreshToken(token) {
    const result = await sequelize.query(
      'CALL residencias.delete_refresh_token(?);',
      {
        replacements: [token],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0].affected_rows > 0;
  }

  async findUserByEmail({ email }) {
      const result = await sequelize.query(
        'CALL residencias.find_user_by_email(?);',
        {
          replacements: [ email ],
          type: QueryTypes.SELECT,
        }
      );
      return result.length > 0 ? result[0][0] : null;
  }
}

export default new UsersRepository();