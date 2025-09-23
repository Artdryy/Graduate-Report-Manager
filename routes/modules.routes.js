import ModulesController from '../controllers/modules.controller.js';
import ModulesMiddleware from '../middlewares/modules.middleware.js';
import { checkPermission } from '../middlewares/authorization.middleware.js';

export default async function modulesRoutes(fastify) {
  // All routes require authentication (private routes)
  fastify.post('/create', { preHandler: [ModulesMiddleware.createModule, checkPermission('Modules', 'CREATE')] }, ModulesController.createModule);
  fastify.get('/list', { preHandler: [ModulesMiddleware.getModules, checkPermission('Modules', 'READ')] }, ModulesController.getModules);
  fastify.put('/update', { preHandler: [ModulesMiddleware.updateModule, checkPermission('Modules', 'UPDATE')] }, ModulesController.updateModule);
  fastify.delete('/delete/:module_id', { preHandler: [ModulesMiddleware.deleteModule, checkPermission('Modules', 'DELETE')] }, ModulesController.deleteModule);
}