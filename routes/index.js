import usersRoutes from './users.routes.js';

export default async function fastifyRoutes(fastify, options) {
    fastify.register(usersRoutes, { prefix: '/users' });

}
