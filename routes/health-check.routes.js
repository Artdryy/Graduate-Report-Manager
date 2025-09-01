export default async function healthRoutes(fastify, options) {
    fastify.get('/', async (request, reply) => {
    return reply.sendSuccess({ message: 'API is running', data: {} });
    });
} 