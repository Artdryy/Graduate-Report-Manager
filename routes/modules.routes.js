// routes/modules.routes.js
import ModulesController from '../controllers/modules.controller.js';

export default async function modulesRoutes(fastify, opts) {
    // POST /api/modules/create
    fastify.post(
        '/create', { preHandler: [fastify.modulesMiddleware.createModule] },
        ModulesController.createModule
    );

    // GET /api/modules
    fastify.get(
        '/', {
          compress: false,
          preHandler: [fastify.modulesMiddleware.getModules]
        },
        ModulesController.getModules
    );

    // PUT /api/modules/update
    fastify.put(
        '/update', { preHandler: [fastify.modulesMiddleware.updateModule] },
        ModulesController.updateModule
    );

    // DELETE /api/modules/delete/:module_id
    fastify.delete(
        '/delete/:module_id', { preHandler: [fastify.modulesMiddleware.deleteModule] },
        ModulesController.deleteModule
    );

    // =============== EJEMPLO DE USO ===========

    /*
    POST /api/modules/create

    Request Body:
    {
        "module_name": "Finance"
    }

    Response:
    {
        "message": "Module created",
        "data": {
            "module_name": "Finance"
        }
    }
    */

    /*
    GET /api/modules

    Response:
    [
        {
            "id": 1,
            "module_name": "Finance"
        }
    ]
    */

    /*
    PUT /api/modules/update

    Request Body:
    {
        "module_id": 1,
        "module_name": "Updated Finance"
    }

    Response:
    {
        "message": "Module updated",
        "data": {
            "module_id": 1,
            "module_name": "Updated Finance"
        }
    }
    */

    /*
    DELETE /api/modules/delete/:module_id

    Request Params:
    {
        "module_id": 1
    }

    Response:
    {
        "message": "Module deleted"
    }
    */
}
