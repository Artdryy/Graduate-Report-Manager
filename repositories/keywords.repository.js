import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class KeywordsRepository {
  async createKeyword({ keyword }) {
    const result = await sequelize.query(
      'CALL residencias.create_keyword(?);',
      {
        replacements: [keyword],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }

  async getKeywords() {
    const result = await sequelize.query(
      'CALL residencias.get_keywords();',
      {
        type: QueryTypes.SELECT
      }
    );
    return result[0];
  }

  async updateKeyword({ keyword_id, keyword }) {
    const result = await sequelize.query(
      'CALL residencias.update_keyword(?, ?);',
      {
        replacements: [keyword_id, keyword],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }

  async deleteKeyword({ keyword_id }) {
    const result = await sequelize.query(
      'CALL residencias.delete_keyword(?);',
      {
        replacements: [keyword_id],
        type: QueryTypes.SELECT
      }
    );
    return result[0][0];
  }
}

export default new KeywordsRepository();