import { useChat } from '@services/ChatManager/ChatContext';

type ChatQuestionProps = {
	question: string;
};

export const ChatQuestion = ({ question }: ChatQuestionProps) => {
	const { sendMessage } = useChat();

	return (
		<div
			className="min-h-28 min-w-48 my-3 text-[14px] bg-white border border-[#C4C5C7] rounded-xl p-2 flex flex-row items-center hover:border-[#D40C2E] hover:cursor-pointer hover:translate-y-[-2px] hover:shadow-md active:translate-y-[0px] select-none"
			onClick={() => sendMessage(question)}
		>
			{question}
		</div>
	);
};
