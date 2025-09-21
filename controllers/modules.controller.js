import ModulesService from '../services/modules.service.js';

class ModulesController {
  createModule = async (req, reply) => {
    const { module_name } = req.body;
    const result = await ModulesService.createModule({ module_name });
    reply.code(201).sendSuccess({ message: 'Module created', data: result });
  };

  getModules = async (req, reply) => {
    const result = await ModulesService.getModules();
    reply.sendSuccess({ message: 'Modules fetched', data: result });
  };

  updateModule = async (req, reply) => {
    const { module_id, module_name } = req.body;
    const result = await ModulesService.updateModule({ module_id, module_name });
    reply.sendSuccess({ message: 'Module updated', data: result });
  };

  deleteModule = async (req, reply) => {
    const { module_id } = req.params;
    const result = await ModulesService.deleteModule({ module_id });
    reply.sendSuccess({ message: result.message || 'Module deleted', data: null });
  };
}

export default new ModulesController();