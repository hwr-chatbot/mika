import { FastifyInstance } from 'fastify';
import { createFeedbackHandler } from './feedback.controller.js';

export default async function feedbackRoutes(app: FastifyInstance) {
	app.post('/', createFeedbackHandler);
}
