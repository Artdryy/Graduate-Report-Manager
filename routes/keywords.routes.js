import KeywordsController from '../controllers/keywords.controller.js';
import KeywordsMiddleware from '../middlewares/keywords.middleware.js';
import { checkPermission } from '../middlewares/authorization.middleware.js';

export default async function keywordsRoutes(fastify) {
  // All routes require authentication (private routes)
  fastify.post('/create', { preHandler: [KeywordsMiddleware.createKeyword, checkPermission('Keywords', 'CREATE')] }, KeywordsController.createKeyword);
  fastify.get('/list', { preHandler: [KeywordsMiddleware.getKeywords, checkPermission('Keywords', 'READ')] }, KeywordsController.getKeywords);
  fastify.put('/update', { preHandler: [KeywordsMiddleware.updateKeyword, checkPermission('Keywords', 'UPDATE')] }, KeywordsController.updateKeyword);
  fastify.delete('/delete/:keyword_id', { preHandler: [KeywordsMiddleware.deleteKeyword, checkPermission('Keywords', 'DELETE')] }, KeywordsController.deleteKeyword);
}