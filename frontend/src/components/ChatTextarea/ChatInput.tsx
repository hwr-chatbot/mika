import React, { useRef, useState } from 'react';

import { SendIcon } from '@icons/SendIcon';

import { useChat } from '@services/ChatManager/ChatContext';

export const ChatInput = () => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [input, setInput] = useState('');

	const { sendMessage } = useChat();

	const MIN_HEIGHT = 34;
	const MAX_HEIGHT = 78;
	const BORDER_HEIGHT = 2;

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.target;
		setInput(value);

		const textarea = textareaRef.current;
		if (!textarea) return;

		textarea.style.height = 'auto';
		const { scrollHeight } = textarea;
		const newHeight = value === '' ? MIN_HEIGHT : Math.min(Math.max(scrollHeight, MIN_HEIGHT), MAX_HEIGHT);

		textarea.style.height = `${newHeight}px`;
		textarea.style.marginBottom = `${MAX_HEIGHT + BORDER_HEIGHT - newHeight}px`;
		if (buttonRef.current) {
			buttonRef.current.style.marginBottom = `${4 + MAX_HEIGHT + BORDER_HEIGHT - newHeight}px`;
		}
	};

	const send = () => {
		sendMessage(input);
		setInput('');
	};

	const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && !e.shiftKey && input.trim() !== '') {
			e.preventDefault();
			send();
		}
	};

	return (
		<div className="flex flex-col gap-3 mt-3">
			<div className="flex items-end justify-end w-full relative">
				<textarea
					ref={textareaRef}
					className="min-h-[34px] max-h-[78px] leading-[22px] py-[6px] pl-[12px] pr-[40px] scroll-p-[6px] text-black font-semibold placeholder:font-normal bg-white border border-[#C4C5C7] rounded-[18px] w-full text-[14px] resize-none overflow-hidden focus:border-[#D40C2E] placeholder-[#999999] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none focus:ring-0 mb-[44px]"
					rows={1}
					name="input"
					placeholder="Ask your question..."
					value={input}
					onChange={handleInputChange}
					onKeyDown={onEnter}
				/>
				<button
					ref={buttonRef}
					className="w-[26px] h-[26px] absolute bg-[#D40C2E] rounded-full cursor-pointer m-0 mr-[4.5px] mb-[49px] flex items-center justify-center active:bg-[#FFFFFF]"
					onClick={send}
				>
					<div className="pl-[2px]">
						<SendIcon width="20px" height="20px" color="#ffffff" />
					</div>
				</button>
			</div>
		</div>
	);
};
