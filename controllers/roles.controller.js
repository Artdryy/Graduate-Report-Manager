import RolesService from '../services/roles.service.js'; 
import { handleError, handleSuccess } from '../middlewares/error.middleware.js';

class RolesController {
    createRole = async (request, reply) => {
        try {
            const { role_name, role_description } = request.createRole || request.body;
            const result = await RolesService.createRole({ role_name, role_description });
            reply.status(result.statusCode);
            return handleSuccess(request, reply, result.data, result.message);
        } catch (error) {
            return handleError(error, request, reply);
        }
    };
}
export default new RolesController();