import { useState } from 'react';
import { ChatMessage } from 'src/type/ChatMessage';
import { FeedbackOptions, FeedbackType, ProvidedFeedback, SaveFeedbackPayload } from 'src/type/Feedback';

import { FeedbackModal } from '@components/FeedbackModal/FeedbackModal';

import { ThumbsUpIcon } from '@icons/ThumbsUpIcon';
import { ThumbsUpIconFilled } from '@icons/ThumbsUpIconFilled';

import { useChat } from '@services/ChatManager/ChatContext';
import { saveFeedback } from '@services/Feedback/FeedbackApi';

type MessageActionsProps = {
	index: number;
	botMessage: ChatMessage;
};

export const MessageActions = ({ index, botMessage }: MessageActionsProps) => {
	const [hovered, setHovered] = useState<FeedbackOptions | null>(null);
	const [providedFeedback, setProvidedFeedback] = useState<ProvidedFeedback | null>(null);
	const [openFeedback, setOpenFeedback] = useState(false);

	const { getMessage } = useChat();

	const clickFeedback = async () => {
		if (hovered === FeedbackOptions.Bad) {
			setOpenFeedback(true);
		} else {
			const userMessage = getMessage(index - 1);
			const providedFeedback: ProvidedFeedback = { option: FeedbackOptions.Good };

			setProvidedFeedback(providedFeedback);

			const saveFeedbackPayload: SaveFeedbackPayload = {
				userMessage: userMessage.text,
				botMessage: botMessage.text,
				feedback: providedFeedback,
			};

			try {
				await saveFeedback(saveFeedbackPayload);
			} catch (err) {
				console.error('Failed to save feedback', err);
			}
		}
	};

	const submitFeedback = async (feedbackType: FeedbackType | null, comment: string) => {
		setOpenFeedback(false);
		if (feedbackType) {
			const userMessage = getMessage(index - 1);
			const providedFeedback: ProvidedFeedback = {
				option: FeedbackOptions.Bad,
				type: feedbackType,
				comment: comment,
			};

			setProvidedFeedback(providedFeedback);

			const saveFeedbackPayload: SaveFeedbackPayload = {
				userMessage: userMessage.text,
				botMessage: botMessage.text,
				feedback: providedFeedback,
			};

			try {
				await saveFeedback(saveFeedbackPayload);
			} catch (err) {
				console.error('Failed to save feedback', err);
			}
		}
	};

	return (
		<div>
			{openFeedback && (
				<FeedbackModal onClose={submitFeedback} botMessage={botMessage} userMessage={getMessage(index - 1)} />
			)}
			{!providedFeedback ? (
				<div className="flex flex-row items-center">
					<div className="flex items-center mr-2">
						{hovered === FeedbackOptions.Good && (
							<span className="text-sm text-[#5D5D5D]">Gute Reaktion</span>
						)}
						{hovered === FeedbackOptions.Bad && (
							<span className="text-sm text-[#5D5D5D]">Schlechte Reaktion</span>
						)}
					</div>

					<div
						className="hover:bg-[#E8E8E8] hover:cursor-pointer p-1 rounded-md"
						onMouseEnter={() => setHovered(FeedbackOptions.Good)}
						onMouseLeave={() => setHovered(null)}
						onClick={clickFeedback}
					>
						{hovered === FeedbackOptions.Good ? (
							<ThumbsUpIconFilled width={18} height={18} color="#5D5D5D" />
						) : (
							<ThumbsUpIcon width={18} height={18} color="#5D5D5D" />
						)}
					</div>

					<div
						className="rotate-180 hover:bg-[#E8E8E8] hover:cursor-pointer p-1 rounded-md"
						onMouseEnter={() => setHovered(FeedbackOptions.Bad)}
						onMouseLeave={() => setHovered(null)}
						onClick={clickFeedback}
					>
						{hovered === FeedbackOptions.Bad ? (
							<ThumbsUpIconFilled width={18} height={18} color="#5D5D5D" />
						) : (
							<ThumbsUpIcon width={18} height={18} color="#5D5D5D" />
						)}
					</div>
				</div>
			) : (
				<span className="text-sm text-[#5D5D5D]">Danke für dein Feedback!</span>
			)}
		</div>
	);
};
