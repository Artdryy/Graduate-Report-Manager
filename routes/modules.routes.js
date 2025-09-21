import ModulesController from '../controllers/modules.controller.js';
import ModulesMiddleware from '../middlewares/modules.middleware.js';

export default async function modulesRoutes(fastify) {
  // All routes require authentication (private routes)
  fastify.post('/create', { preHandler: ModulesMiddleware.createModule }, ModulesController.createModule);
  fastify.get('/list', { preHandler: ModulesMiddleware.getModules }, ModulesController.getModules);
  fastify.put('/update', { preHandler: ModulesMiddleware.updateModule }, ModulesController.updateModule);
  fastify.delete('/delete/:module_id', { preHandler: ModulesMiddleware.deleteModule }, ModulesController.deleteModule);
}