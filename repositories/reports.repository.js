import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class ReportsRepository {
  async createReport({
    student_name,
    control_number,
    major,
    report_title,
    pdf_route,
    company_id,
    semester_id,
    keywordsJson,
  }) {
    await sequelize.query(
      'call residencias.sp_create_report(?, ?, ?, ?, ?, ?, ?, ?, @p_report_id);',
      {
        replacements: [
          student_name,
          control_number,
          major,
          report_title,
          pdf_route,
          company_id,
          semester_id,
          keywordsJson,
        ],
        type: QueryTypes.RAW,
      }
    );
    const [outParam] = await sequelize.query('select @p_report_id as id;');
    return outParam[0];
  }

  async getReports() {
    const result = await sequelize.query('CALL residencias.sp_get_reports();', {
      type: QueryTypes.SELECT,
    });
    return result[0];
  }

  async updateReport({
    report_id,
    student_name,
    report_title,
    company_id,
    semester_id,
    pdf_route, // Now included
    keywordsJson,
  }) {
    const result = await sequelize.query(
      'CALL residencias.sp_update_report(?, ?, ?, ?, ?, ?, ?);',
      {
        replacements: [
          report_id,
          student_name,
          report_title,
          company_id,
          semester_id,
          pdf_route, 
          keywordsJson,
        ],
        type: QueryTypes.SELECT,
      }
    );
    return result[0][0];
  }

  async deleteReport({ report_id }) {
    const result = await sequelize.query('CALL residencias.sp_delete_report(?);', {
      replacements: [report_id],
      type: QueryTypes.SELECT,
    });
    return result[0][0];
  }
  
  async getReportPdfRoute({ report_id }) {
    const result = await sequelize.query('CALL residencias.sp_get_report_pdf_route(?);', {
      replacements: [report_id],
      type: QueryTypes.SELECT,
    });
    return result.length > 0 ? result[0][0] : null;
  }
  
  async getReportsByKeyword({ keyword }) {
    const result = await sequelize.query('CALL residencias.get_reports_by_keyword(?);', {
        replacements: [keyword],
        type: QueryTypes.SELECT
    });
    return result[0];
  }
}

export default new ReportsRepository();