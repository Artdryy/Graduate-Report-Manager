import CompaniesController from '../controllers/companies.controller.js';
import CompaniesMiddleware from '../middlewares/companies.middleware.js';
import { checkPermission } from '../middlewares/authorization.middleware.js';

export default async function companiesRoutes(fastify) {
  // All routes require authentication (private routes)
  fastify.post('/create', { preHandler: [CompaniesMiddleware.createCompany, checkPermission('Companies', 'CREATE')] }, CompaniesController.createCompany);
  fastify.get('/list', { preHandler: [CompaniesMiddleware.getCompanies, checkPermission('Companies', 'READ')] }, CompaniesController.getCompanies);
  fastify.put('/update', { preHandler: [CompaniesMiddleware.updateCompany, checkPermission('Companies', 'UPDATE')] }, CompaniesController.updateCompany);
  fastify.delete('/delete/:company_id', { preHandler: [CompaniesMiddleware.deleteCompany, checkPermission('Companies', 'DELETE')] }, CompaniesController.deleteCompany);
}