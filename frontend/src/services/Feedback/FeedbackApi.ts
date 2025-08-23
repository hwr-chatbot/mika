export type SaveFeedbackPayload = {
	userMessage: string;
	botMessage: string;
	feedbackType: string;
	comment?: string;
};

export async function saveFeedback(payload: SaveFeedbackPayload) {
	const apiUrl = import.meta.env.VITE_BACKEND_API_URL;

	const response = await fetch(`${apiUrl}/feedback`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		throw new Error(`Failed to save feedback: ${response.statusText}`);
	}

	return response.json();
}
