import SemesterController from '../controllers/semester.controller.js';
import SemesterMiddleware from '../middlewares/semester.middleware.js';

export default async function semesterRoutes(fastify) {
  // All routes require authentication (private routes)
  fastify.post('/create', { preHandler: SemesterMiddleware.createSemester }, SemesterController.createSemester);
  fastify.get('/list', { preHandler: SemesterMiddleware.getSemesters }, SemesterController.getSemesters);
  fastify.put('/update', { preHandler: SemesterMiddleware.updateSemester }, SemesterController.updateSemester);
  fastify.delete('/delete/:semester_id', { preHandler: SemesterMiddleware.deleteSemester }, SemesterController.deleteSemester);
}