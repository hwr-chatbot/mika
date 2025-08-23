import { FastifyReply, FastifyRequest } from 'fastify';
import { createFeedback } from '../../services/feedback.service.js';

type FeedbackRequest = FastifyRequest<{
	Body: {
		userMessage: string;
		botMessage: string;
		feedbackType: string;
		comment?: string;
	};
}>;

export const createFeedbackHandler = async (req: FeedbackRequest, reply: FastifyReply) => {
	try {
		const feedback = await createFeedback(req.server, req.body);
		return { success: true, feedback };
	} catch (err) {
		req.log.error(err);
		return reply.status(500).send({ success: false });
	}
};
