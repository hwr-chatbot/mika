import { ChatBubble } from '@components/ChatBox/ChatBubble';

import { useChat } from '@services/ChatManager/ChatContext';

export const ChatBox = () => {
	const { history } = useChat();

	return (
		<div className="h-[500px] w-full flex flex-col gap-4 overflow-y-auto scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
			{history.map((message, index) => (
				<ChatBubble key={index} message={message} index={index} />
			))}
		</div>
	);
};
