import { FastifyReply, FastifyRequest } from 'fastify';
import { createFeedback } from '../../services/feedback.service.js';
import { Prisma } from '@prisma/client';

enum FeedbackOptions {
	Good = 'good',
	Bad = 'bad',
}

enum FeedbackType {
	UnpreciseAnswer = 'Unprecise Answer',
	WrongAnswer = 'Wrong Answer',
	IncompleteAnswer = 'Incomplete Answer',
	MisleadingAnswer = 'Misleading Answer',
}

type ProvidedFeedback = {
	option: FeedbackOptions;
	type?: FeedbackType;
	comment?: string;
};

type SaveFeedbackPayload = {
	userMessage: string;
	botMessage: string;
	feedback: ProvidedFeedback;
};

type FeedbackRequest = FastifyRequest<{
	Body: SaveFeedbackPayload;
}>;

export const createFeedbackHandler = async (req: FeedbackRequest, reply: FastifyReply) => {
	const payload = req.body;

	const feedbackCreateInput: Prisma.FeedbackCreateInput = {
		userMessage: payload.userMessage,
		botMessage: payload.botMessage,
		feedbackOption: payload.feedback.option,
		feedbackType: payload.feedback.type,
		comment: payload.feedback.comment,
	};

	try {
		const feedback = await createFeedback(req.server, feedbackCreateInput);
		return { success: true, feedback };
	} catch (err) {
		req.log.error(err);
		return reply.status(500).send({ success: false });
	}
};
