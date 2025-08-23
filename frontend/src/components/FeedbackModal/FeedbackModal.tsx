import { useEffect, useState } from 'react';
import { ChatMessage } from 'src/type/ChatMessage';

import { ChatBubble } from '@components/ChatBox/ChatBubble';

import { XIcon } from '@icons/XIcon';

import { FeedbackType } from '@type/Feedback';

type FeedbackModalProps = {
	userMessage: ChatMessage;
	botMessage: ChatMessage;
	onClose: (feedbackType: FeedbackType | null, comment: string) => void;
};

export const FeedbackModal = ({ userMessage, botMessage, onClose }: FeedbackModalProps) => {
	const [selectedAnswer, setSelectedAnswer] = useState<FeedbackType | null>(null);
	const [comment, setComment] = useState('');

	useEffect(() => {
		document.body.classList.add('overflow-hidden');

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, []);

	return (
		<div className="fixed inset-0 z-20 flex items-center justify-center">
			<div
				className="absolute inset-0 bg-black opacity-50"
				onClick={() => onClose(selectedAnswer, comment)}
			></div>
			<div
				className="relative z-30 bg-white rounded-xl p-6 shadow-lg flex flex-col gap-4 max-w-[1000px]"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex flex-row justify-between">
					<h1 className="text-[#202020] text-2xl font-bold tracking-tight text-left">Help us improve MIKA</h1>
					<button
						className="w-8 h-8 flex items-center justify-center hover:cursor-pointer hover:bg-[#E8E8E8] p-1 rounded-full"
						onClick={() => onClose(selectedAnswer, comment)}
					>
						<XIcon width={16} height={16} color="#5D5D5D" />
					</button>
				</div>

				<span className="text-left">
					MIKA is constantly learning, and you can help it improve! By providing valuable feedback, you help
					enhance the experience for everyone using MIKA.
				</span>

				<div className="flex flex-col gap-4 border rounded-xl p-8 my-8">
					<div className="flex flex-col ml-8">
						<ChatBubble message={userMessage} />
					</div>
					<div className="flex flex-col mr-8">
						<ChatBubble message={botMessage} />
					</div>
				</div>

				<h1 className="text-[#202020] text-xl font-bold tracking-tight text-left">Give MIKA your feedback</h1>

				<div className="flex flex-row gap-1">
					<button
						className={`flex-1 bg-[#D40C2E] text-white font-semibold p-4 rounded-l-xl hover:bg-[#b10925] underline-offset-4 decoration-1 ${
							selectedAnswer === FeedbackType.UnpreciseAnswer ? 'underline' : ''
						}`}
						onClick={() => setSelectedAnswer(FeedbackType.UnpreciseAnswer)}
					>
						{FeedbackType.UnpreciseAnswer}
					</button>

					<button
						className={`flex-1 bg-[#D40C2E] text-white font-semibold p-4 hover:bg-[#b10925] underline-offset-4 decoration-1 ${
							selectedAnswer === FeedbackType.WrongAnswer ? 'underline' : ''
						}`}
						onClick={() => setSelectedAnswer(FeedbackType.WrongAnswer)}
					>
						{FeedbackType.WrongAnswer}
					</button>

					<button
						className={`flex-1 bg-[#D40C2E] text-white font-semibold p-4 hover:bg-[#b10925] underline-offset-4 decoration-1 ${
							selectedAnswer === FeedbackType.IncompleteAnswer ? 'underline' : ''
						}`}
						onClick={() => setSelectedAnswer(FeedbackType.IncompleteAnswer)}
					>
						{FeedbackType.IncompleteAnswer}
					</button>

					<button
						className={`flex-1 bg-[#D40C2E] text-white font-semibold p-4 rounded-r-xl hover:bg-[#b10925] underline-offset-4 decoration-1 ${
							selectedAnswer === FeedbackType.MisleadingAnswer ? 'underline' : ''
						}`}
						onClick={() => setSelectedAnswer(FeedbackType.MisleadingAnswer)}
					>
						{FeedbackType.MisleadingAnswer}
					</button>
				</div>

				<textarea
					className="border rounded-xl resize-none p-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none focus:ring-0 focus:border-gray-400"
					rows={6}
					placeholder="Anything more to say? (optional)"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>

				<div className="flex flex-row justify-between items-center">
					<span>Your feedback will be submitted anonymously.</span>
					<button
						className="bg-[#D40C2E] text-white font-semibold p-4 px-8 rounded-xl hover:bg-[#b10925] disabled:bg-[#E8E8E8] disabled:text-gray-400"
						disabled={selectedAnswer === null}
						onClick={() => onClose(selectedAnswer, comment)}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};
