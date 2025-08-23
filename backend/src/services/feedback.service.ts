import { Prisma } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export async function createFeedback(app: FastifyInstance, data: Prisma.FeedbackCreateInput) {
	return app.prisma.feedback.create({ data });
}
