import Fastify from 'fastify';

const fastify = Fastify({ logger: true })

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
                    message: { type: 'string' }
                }
            }
        },
    },
    preHandler: async (request, reply) => {
        const header = request.headers.authorization;
        const accessToken = header.split(' ')[1]
        // TODO: validate token
    },
    handler: async (request, reply) => {
        return { message: 'hello world' }
    }
})

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
