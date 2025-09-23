import SemesterController from '../controllers/semester.controller.js';
import SemesterMiddleware from '../middlewares/semester.middleware.js';
import { checkPermission } from '../middlewares/authorization.middleware.js';

export default async function semesterRoutes(fastify) {
  fastify.post('/create', { preHandler: [SemesterMiddleware.createSemester, checkPermission('Semester', 'CREATE')] }, SemesterController.createSemester);
  fastify.get('/list', { preHandler: [SemesterMiddleware.getSemesters, checkPermission('Semester', 'READ')] }, SemesterController.getSemesters);
  fastify.put('/update', { preHandler: [SemesterMiddleware.updateSemester, checkPermission('Semester', 'UPDATE')] }, SemesterController.updateSemester);
  fastify.delete('/delete/:semester_id', { preHandler: [SemesterMiddleware.deleteSemester, checkPermission('Semester', 'DELETE')] }, SemesterController.deleteSemester);
}