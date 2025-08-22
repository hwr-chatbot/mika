import { ChatMessage, Sender } from 'src/type/ChatMessage';

import Mika from '@assets/mika.png';

import { MessageActions } from './MessageActions';

type ChatBubbleProps = {
	message: ChatMessage;
	index?: number;
};

export const ChatBubble = ({ message, index }: ChatBubbleProps) => {
	const fromBot = message.sender === Sender.Bot;

	return (
		<div className={`flex flex-row ${fromBot ? 'self-start ' : 'self-end'}`}>
			{fromBot ? <img src={Mika} className="w-14 h-14 mr-2 translate-y-[-6px]" /> : ''}
			<div className="flex flex-col gap-1 items-end">
				<div
					className={`rounded-xl p-3 text-left max-w-[600px] ${
						fromBot ? 'border border-[#D40C2E] bg-[#D40C2E] text-white' : 'border bg-white'
					}`}
				>
					{message.text === '...' ? (
						<span className="flex h-[20px] ml-2">
							<div className="h-1 w-1 m-auto mr-1 float-left bg-slate-200 rounded-full animate-bounce-lg ease-in-out [animation-delay:-0.2s]" />
							<div className="h-1 w-1 m-auto mr-1 float-left bg-slate-200 rounded-full animate-bounce-lg ease-in-out [animation-delay:-0.1s]" />
							<div className="h-1 w-1 m-auto mr-3 float-left bg-slate-200 rounded-full animate-bounce-lg ease-in-out" />
						</span>
					) : (
						message.text
					)}
				</div>
				{message.isGenerated && index && <MessageActions index={index} botMessage={message} />}
			</div>
		</div>
	);
};
