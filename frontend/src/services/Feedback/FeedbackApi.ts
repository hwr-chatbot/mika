import axios, { AxiosError } from 'axios';

export type SaveFeedbackPayload = {
	userMessage: string;
	botMessage: string;
	feedbackType: string;
	comment?: string;
};

export async function saveFeedback(payload: SaveFeedbackPayload) {
	const apiUrl = import.meta.env.VITE_BACKEND_API_URL;

	try {
		const response = await axios.post(`${apiUrl}/feedback`, payload);

		return response.data;
	} catch (error) {
		const err = error as AxiosError<{ message?: string }>;
		const message = err.response?.data?.message || err.message || 'Failed to save feedback';
		throw new Error(message);
	}
}
