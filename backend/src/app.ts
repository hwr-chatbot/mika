import Fastify from 'fastify';
import cors from '@fastify/cors';
import formbody from '@fastify/formbody';
import prismaPlugin from './plugins/prisma.js';
import feedbackRoutes from './routes/feedback/feedback.route.js';

export const buildApp = () => {
	const app = Fastify({ logger: true });

	app.register(cors, { origin: '*' });
	app.register(formbody);
	app.register(prismaPlugin);

	app.register(feedbackRoutes, { prefix: '/feedback' });

	return app;
};
