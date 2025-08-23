import axios from 'axios';
import { useEffect, useState } from 'react';

export const OnlineTag = () => {
	const [isOnline, setIsOnline] = useState<boolean | null>(null);

	const checkServer = async () => {
		const apiUrl = import.meta.env.VITE_RASA_API_URL;

		try {
			await axios.post(apiUrl, {}, { timeout: 5000 });
			setIsOnline(true);
		} catch {
			setIsOnline(false);
		}
	};

	useEffect(() => {
		checkServer();
		const interval = setInterval(checkServer, 10000);
		return () => clearInterval(interval);
	}, []);

	if (isOnline === null) return null;

	return (
		<div
			className={`flex items-center gap-1 rounded-full border px-3 py-[2px] mt-1 ${
				isOnline ? 'text-green-600' : 'text-red-600'
			}`}
		>
			<span className="relative flex h-[6px] w-[6px]">
				<span
					className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
						isOnline ? 'bg-green-600' : 'bg-red-600'
					} opacity-75`}
				/>
				<span
					className={`relative inline-flex h-[6px] w-[6px] rounded-full ${isOnline ? 'bg-green-600' : 'bg-red-600'}`}
				/>
			</span>
			<p className="mt-[-2px]">{isOnline ? 'Online' : 'Offline'}</p>
		</div>
	);
};
