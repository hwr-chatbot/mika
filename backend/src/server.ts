import 'dotenv/config';
import cors from '@fastify/cors';
import formbody from '@fastify/formbody';
import { PrismaClient } from '@prisma/client';
import Fastify from 'fastify';

const prisma = new PrismaClient();
const app = Fastify({ logger: true });

app.register(cors, { origin: '*' });
app.register(formbody);

type FeedbackRequestBody = {
	userMessage: string;
	botMessage: string;
	feedbackType: string;
	comment?: string;
};

app.post<{ Body: FeedbackRequestBody }>('/feedback', async (request, reply) => {
	const { userMessage, botMessage, feedbackType, comment } = request.body;

	if (!userMessage || !botMessage || !feedbackType) {
		return reply.status(400).send({ success: false, message: 'Missing required fields' });
	}

	try {
		const feedback = await prisma.feedback.create({
			data: { userMessage, botMessage, feedbackType, comment },
		});
		return { success: true, feedback };
	} catch (err) {
		request.log.error(err);
		return reply.status(500).send({ success: false });
	}
});

const start = async () => {
	try {
		const port = Number(process.env.PORT) || 5000;
		await app.listen({ port, host: '0.0.0.0' });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

start();
