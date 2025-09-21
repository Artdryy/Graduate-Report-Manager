import KeywordsController from '../controllers/keywords.controller.js';
import KeywordsMiddleware from '../middlewares/keywords.middleware.js';

export default async function keywordsRoutes(fastify) {
  // All routes require authentication (private routes)
  fastify.post('/create', { preHandler: KeywordsMiddleware.createKeyword }, KeywordsController.createKeyword);
  fastify.get('/list', { preHandler: KeywordsMiddleware.getKeywords }, KeywordsController.getKeywords);
  fastify.put('/update', { preHandler: KeywordsMiddleware.updateKeyword }, KeywordsController.updateKeyword);
  fastify.delete('/delete/:keyword_id', { preHandler: KeywordsMiddleware.deleteKeyword }, KeywordsController.deleteKeyword);
}