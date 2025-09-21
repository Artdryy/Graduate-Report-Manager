import CompaniesController from '../controllers/companies.controller.js';
import CompaniesMiddleware from '../middlewares/companies.middleware.js';

export default async function companiesRoutes(fastify) {
  // All routes require authentication (private routes)
  fastify.post('/create', { preHandler: CompaniesMiddleware.createCompany }, CompaniesController.createCompany);
  fastify.get('/list', { preHandler: CompaniesMiddleware.getCompanies }, CompaniesController.getCompanies);
  fastify.put('/update', { preHandler: CompaniesMiddleware.updateCompany }, CompaniesController.updateCompany);
  fastify.delete('/delete/:company_id', { preHandler: CompaniesMiddleware.deleteCompany }, CompaniesController.deleteCompany);
}