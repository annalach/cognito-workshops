import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });
fastify.register(cors, { origin: true });

fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        headers: {
            type: 'object',
            properties: {
                'Authorization': { type: 'string' }
            },
            required: ['Authorization']

        },
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                },
            },
        },
    },
    preHandler: async (request, reply) => { },
    handler: async (request, reply) => {
        return { message: 'hello world' }
    }
})

const start = async () => {
    try {
        await fastify.listen(5000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
