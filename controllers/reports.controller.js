import ReportsService from '../services/reports.service.js';

class ReportsController {
  createReport = async (req, reply) => {
    if (!req.file) {
      return reply.status(400).send({ status: false, message: 'PDF file is required.', data: null });
    }
    
    const data = {
      ...req.body,
      pdf_route: req.file.path 
    };
    
    const result = await ReportsService.createReport(data);
    reply.code(201).sendSuccess({ message: 'Report created successfully', data: result });
  };

  getReports = async (req, reply) => {
    const result = await ReportsService.getReports();
    reply.sendSuccess({ message: 'Reports fetched successfully', data: result });
  };

  updateReport = async (req, reply) => {
    const { report_id } = req.params;
    
    const data = {
      ...req.body,
      report_id: parseInt(report_id, 10),
      pdf_route: req.file ? req.file.path : undefined,
    };
    
    const result = await ReportsService.updateReport(data);
    reply.sendSuccess({ message: 'Report updated successfully', data: result });
  };

  deleteReport = async (req, reply) => {
    const { report_id } = req.params;
    const result = await ReportsService.deleteReport({ report_id: parseInt(report_id, 10) });
    reply.sendSuccess({ message: result.message || 'Report deleted successfully', data: null });
  };

  getReportsByKeyword = async (req, reply) => {
      const { keyword } = req.params;
      const result = await ReportsService.getReportsByKeyword({ keyword });
      reply.sendSuccess({ message: `Reports fetched for keyword: ${keyword}`, data: result });
  }
}

export default new ReportsController();