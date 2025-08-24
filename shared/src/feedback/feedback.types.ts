export enum FeedbackOptions {
	Good = 'good',
	Bad = 'bad',
}

export enum FeedbackType {
	UnpreciseAnswer = 'Unprecise Answer',
	WrongAnswer = 'Wrong Answer',
	IncompleteAnswer = 'Incomplete Answer',
	MisleadingAnswer = 'Misleading Answer',
}

export type ProvidedFeedback = {
	option: FeedbackOptions;
	type?: FeedbackType;
	comment?: string;
};

export type SaveFeedbackPayload = {
	userMessage: string;
	botMessage: string;
	feedback: ProvidedFeedback;
};
