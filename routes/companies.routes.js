// routes/companies.routes.js
import CompaniesController from '../controllers/companies.controller.js';

export default async function companiesRoutes(fastify, opts) {
    // POST /api/companies/create
    fastify.post(
        '/create', { preHandler: [fastify.companiesMiddleware.createCompany] },
        CompaniesController.createCompany
    );

    // GET /api/companies
    fastify.get(
        '/', {
          compress: false,
          preHandler: [fastify.companiesMiddleware.getCompanies]
        },
        CompaniesController.getCompanies
    );

    // PUT /api/companies/update
    fastify.put(
        '/update', { preHandler: [fastify.companiesMiddleware.updateCompany] },
        CompaniesController.updateCompany
    );

    // DELETE /api/companies/delete/:company_id
    fastify.delete(
        '/delete/:company_id', { preHandler: [fastify.companiesMiddleware.deleteCompany] },
        CompaniesController.deleteCompany
    );

    // =============== EJEMPLO DE USO ===========

    /*
    POST /api/companies/create

    Request Body:
    {
        "company_name": "Acme Corp",
        "description": "Company that manufactures gadgets",
        "address": "1234 Tech Park",
        "phone_number": "+1234567890",
        "email": "contact@acmecorp.com"
    }

    Response:
    {
        "message": "Company created",
        "data": {
            "company_name": "Acme Corp",
            "description": "Company that manufactures gadgets",
            "address": "1234 Tech Park",
            "phone_number": "+1234567890",
            "email": "contact@acmecorp.com"
        }
    }
    */

    /*
    GET /api/companies

    Response:
    [
        {
            "id": 1,
            "company_name": "Acme Corp",
            "description": "Company that manufactures gadgets",
            "address": "1234 Tech Park",
            "phone_number": "+1234567890",
            "email": "contact@acmecorp.com"
        }
    ]
    */

    /*
    PUT /api/companies/update

    Request Body:
    {
        "company_id": 1,
        "company_name": "Acme Corp Updated",
        "description": "Updated description",
        "address": "5678 New Tech Park",
        "phone_number": "+0987654321",
        "email": "newcontact@acmecorp.com"
    }

    Response:
    {
        "message": "Company updated",
        "data": {
            "company_id": 1,
            "company_name": "Acme Corp Updated",
            "description": "Updated description",
            "address": "5678 New Tech Park",
            "phone_number": "+0987654321",
            "email": "newcontact@acmecorp.com"
        }
    }
    */

    /*
    DELETE /api/companies/delete/:company_id

    Request Params:
    {
        "company_id": 1
    }

    Response:
    {
        "message": "Company deleted"
    }
    */
}
