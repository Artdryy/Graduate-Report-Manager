import ReportsRepository from '../repositories/reports.repository.js';
import { catchError } from '../helpers/catch.error.js';
import fs from 'fs/promises';
import path from 'path';

class ReportsService {
  async createReport(data) {
    const keywordsJson = JSON.stringify(data.keywords || []);
    const reportData = { ...data, keywordsJson };

    const [result, error] = await catchError(
      ReportsRepository.createReport(reportData)
    );
    if (error) throw error;
    return result;
  }

  async getReports() {
    const [result, error] = await catchError(ReportsRepository.getReports());
    if (error) throw error;
    return result;
  }

  async updateReport(data) {
    const oldReport = await ReportsRepository.getReportPdfRoute({ report_id: data.report_id });
    const oldPdfPath = oldReport ? oldReport.pdf_route : null;

    const keywordsJson = JSON.stringify(data.keywords || []);
    const reportData = { ...data, keywordsJson };
    
    const [result, error] = await catchError(
      ReportsRepository.updateReport(reportData)
    );
    if (error) throw error;

    if (oldPdfPath && data.pdf_route) {
      try {
        await fs.unlink(path.resolve(oldPdfPath));
      } catch (e) {
        console.error(`Failed to delete old PDF: ${oldPdfPath}`, e);
      }
    }
    
    return result;
  }

  async deleteReport(data) {
    const report = await ReportsRepository.getReportPdfRoute({ report_id: data.report_id });
    const pdfPath = report ? report.pdf_route : null;
    
    const [result, error] = await catchError(
      ReportsRepository.deleteReport(data)
    );
    if (error) throw error;

    if (pdfPath) {
      try {
        await fs.unlink(path.resolve(pdfPath));
      } catch (e) {
        console.error(`Failed to delete PDF: ${pdfPath}`, e);
      }
    }
    return result;
  }

  async getReportsByKeyword(data) {
      const [result, error] = await catchError(ReportsRepository.getReportsByKeyword(data));
      if (error) throw error;
      return result;
  }
}

export default new ReportsService();