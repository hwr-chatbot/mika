import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';

import { ChatProvider } from '@services/ChatManager/ChatContext';

import { AboutPage } from '@pages/AboutPage/AboutPage';
import { ChatPage } from '@pages/ChatPage/ChatPage';
import { FeedbackPage } from '@pages/FeedbackPage/FeedbackPage';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<ChatProvider>
			<div className="app max-w-[1440px] ml-auto mr-auto h-auto">
				<Header />
				<Routes>
					<Route path="/" element={<ChatPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/feedback" element={<FeedbackPage />} />
				</Routes>
				<Footer />
			</div>
		</ChatProvider>
	</BrowserRouter>
);
