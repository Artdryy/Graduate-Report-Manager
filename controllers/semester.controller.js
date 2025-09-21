import SemesterService from '../services/semester.service.js';

class SemesterController {
  createSemester = async (req, reply) => {
    const { semester } = req.body;
    const result = await SemesterService.createSemester({ semester });
    reply.code(201).sendSuccess({ message: 'Semester created', data: result });
  };

  getSemesters = async (req, reply) => {
    const result = await SemesterService.getSemesters();
    reply.sendSuccess({ message: 'Semesters fetched', data: result });
  };

  updateSemester = async (req, reply) => {
    const { semester_id, semester } = req.body;
    const result = await SemesterService.updateSemester({ semester_id, semester });
    reply.sendSuccess({ message: 'Semester updated', data: result });
  };

  deleteSemester = async (req, reply) => {
    const { semester_id } = req.params;
    const result = await SemesterService.deleteSemester({ semester_id });
    reply.sendSuccess({ message: result.message || 'Semester deleted', data: null });
  };
}

export default new SemesterController();