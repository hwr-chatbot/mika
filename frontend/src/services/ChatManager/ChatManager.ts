import axios, { AxiosError } from 'axios';
import { ChatMessage, Sender } from 'src/type/ChatMessage';

type RasaResponse = {
	text?: string;
	image?: string;
};

type ChatHistory = {
	history: ChatMessage[];
};

const delay = async (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export class ChatManager {
	private chatHistory: ChatHistory = { history: [] };
	private updateCallback: (history: ChatHistory) => void;

	constructor(firstMessage: ChatMessage, updateCallback: (history: ChatHistory) => void) {
		this.updateCallback = updateCallback;
		this.setChatHistory({ history: [firstMessage] });
	}

	getHistory() {
		return this.chatHistory.history;
	}

	private setChatHistory(newHistory: ChatHistory) {
		this.chatHistory = newHistory;
		this.updateCallback(newHistory);
	}

	async sendMessage(message: string) {
		this.setChatHistory({
			history: [...this.chatHistory.history, { text: message, sender: Sender.User, isGenerated: false }],
		});

		const message_id = this.chatHistory.history.length;

		await delay(500);

		this.setChatHistory({
			history: [...this.chatHistory.history, { text: '...', sender: Sender.Bot, isGenerated: false }],
		});

		const apiUrl = import.meta.env.VITE_RASA_API_URL;

		try {
			const { data } = await axios.post<RasaResponse[]>(apiUrl, {
				sender: Sender.User,
				message,
			});

			const response: string = data.map((res) => res.text ?? res.image ?? '').join('\r\n');

			await delay(2000);

			const updated = [...this.chatHistory.history];
			updated[message_id] = { text: response, sender: Sender.Bot, isGenerated: true };

			this.setChatHistory({ history: updated });
		} catch (error) {
			const err = error as AxiosError<{ message?: string }>;
			const message = err.response?.data?.message || err.message || 'Failed to send message';
			throw new Error(message);
		}
	}
}
