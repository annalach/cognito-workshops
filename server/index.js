import Fastify from 'fastify';
import { CognitoJwtVerifier } from 'aws-jwt-verify';
import config from './config.js';

const fastify = Fastify({ logger: true });

const verifier = CognitoJwtVerifier.create({
    userPoolId: config.userPoolId,
    clientId: config.clientId,
    tokenUse: 'access',
});

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
    preHandler: async (request, reply) => {
        const header = request.headers.authorization;
        const accessToken = header.split('Bearer ')[1];
        try {
            const payload = await verifier.verify(accessToken);
            fastify.log.info(`Token is valid. Payload: ${JSON.stringify(payload)}`);
        } catch {
            fastify.log.info('Token not valid!');
            reply.status(401).send('Unauthorized')
        }
    },
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
