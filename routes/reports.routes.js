import ReportsController from '../controllers/reports.controller.js';
import ReportsMiddleware from '../middlewares/reports.middleware.js';
import upload from '../middlewares/upload.middleware.js';
import { checkPermission } from '../middlewares/authorization.middleware.js';

export default async function reportsRoutes(fastify) {
  fastify.post('/create',
    { preHandler: [upload.single('pdf'), ReportsMiddleware.createReport, checkPermission('Reports', 'CREATE'),],}, ReportsController.createReport);

  fastify.get('/list', { preHandler: checkPermission('Reports', 'READ') },ReportsController.getReports);

  fastify.get(
    '/keyword/:keyword',
    { preHandler: checkPermission('Reports', 'READ') },
    ReportsController.getReportsByKeyword
  );

  fastify.put(
    '/update/:report_id',
    {
      preHandler: [
        upload.single('pdf'),
        ReportsMiddleware.updateReport,
        checkPermission('Reports', 'UPDATE'),
      ],
    },
    ReportsController.updateReport
  );

  fastify.delete(
    '/delete/:report_id',
    {
      preHandler: [
        ReportsMiddleware.deleteReport,
        checkPermission('Reports', 'DELETE'),
      ],
    },
    ReportsController.deleteReport
  );
}