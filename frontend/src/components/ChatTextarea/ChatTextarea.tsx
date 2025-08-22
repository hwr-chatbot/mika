import { ChatInput } from '@components/ChatTextarea/ChatInput';
import { ChatQuestions } from '@components/ChatTextarea/ChatQuestions';

export const ChatTextarea = () => {
	const questions = [
		'How can I enroll at HWR?',
		'Which degree programs does HWR offer?',
		'Which documents do I need to apply for a study program?',
		'Is there an application deadline for the winter semester?',
		'How can I register for a semester abroad?',
		'Can I get an internship recognized during my studies?',
		'Which language courses are offered?',
	];

	return (
		<div className="flex flex-col">
			<ChatQuestions questions={questions} />
			<ChatInput />
		</div>
	);
};
