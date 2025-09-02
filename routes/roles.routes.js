// routes/roles.routes.js
import RolesController from '../controllers/roles.controller.js';

export default async function rolesRoutes(fastify, opts) {
    // POST /api/roles/create
    fastify.post(
        '/create', { preHandler: [fastify.rolesMiddleware.createRole] },
        RolesController.createRole
    );

    // GET /api/roles/list
    fastify.get(
        '/list', {
          compress: false,
          preHandler: [fastify.rolesMiddleware.getRoles]
        },
        RolesController.getRoles
    );

    // PUT /api/roles/update
    fastify.put(
        '/update', { preHandler: [fastify.rolesMiddleware.updateRole] },
        RolesController.updateRole
    );

    // DELETE /api/roles/delete
    fastify.delete(
        '/delete/:role_id', { preHandler: [fastify.rolesMiddleware.deleteRole] },
        RolesController.deleteRole
    );

    // =============== EJEMPLO DE USO ===========

    /*
    POST /api/roles/create

    Request Body:
    {
        "role_name": "Admin",
        "permissions": ["create", "update", "delete"]
    }

    Response:
    {
        "message": "Role created",
        "data": {
            "role_name": "Admin",
            "permissions": ["create", "update", "delete"]
        }
    }
    */

    /*
    GET /api/roles/list

    Response:
    [
        {
            "id": 1,
            "role_name": "Admin",
            "permissions": ["create", "update", "delete"]
        }
    ]
    */

    /*
    PUT /api/roles/update

    Request Body:
    {
        "role_id": 1,
        "role_name": "Super Admin",
        "permissions": ["create", "update", "delete", "view"]
    }

    Response:
    {
        "message": "Role updated",
        "data": {
            "role_id": 1,
            "role_name": "Super Admin",
            "permissions": ["create", "update", "delete", "view"]
        }
    }
    */

    /*
    DELETE /api/roles/delete/:role_id

    Request Params:
    {
        "role_id": 1
    }

    Response:
    {
        "message": "Role deleted"
    }
    */
}
// =============== EJEMPLO DE USO ===========