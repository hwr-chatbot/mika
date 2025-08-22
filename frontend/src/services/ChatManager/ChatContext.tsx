import React, { createContext, useContext, useState } from 'react';
import { ChatMessage, Sender } from 'src/type/ChatMessage';

import { ChatManager } from './ChatManager';

type ChatContextType = {
	history: ChatMessage[];
	sendMessage: (message: string) => void;
	getMessage: (index: number) => ChatMessage;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [history, setHistory] = useState<ChatMessage[]>([]);
	const [chatManager] = useState(
		() =>
			new ChatManager(
				{
					text: 'Hey there 👋 I’m MIKA, your friendly chatbot at HWR Berlin! I’ll help you find answers about our master’s programs for international students. Just send me one message per question — short & simple — and no personal info, please.',
					sender: Sender.Bot,
					isGenerated: false,
				},
				(chatHistory) => setHistory(chatHistory.history)
			)
	);

	const sendMessage = (message: string) => {
		chatManager.sendMessage(message);
	};

	const getMessage = (index: number) => {
		return history[index] ?? null;
	};

	return <ChatContext.Provider value={{ history, sendMessage, getMessage }}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
	const ctx = useContext(ChatContext);
	if (!ctx) throw new Error('useChat must be used inside ChatProvider');
	return ctx;
};
