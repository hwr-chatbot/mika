export enum Sender {
	Bot = 'bot',
	User = 'user',
}

export type ChatMessage = {
	sender: Sender;
	text: string;
	isGenerated: boolean;
};
