import { ChatBox } from '@components/ChatBox/ChatBox';
import { ChatTextarea } from '@components/ChatTextarea/ChatTextarea';
import { Headline } from '@components/Headline/Headline';
import { OnlineTag } from '@components/OnlineTag/OnlineTag';
import { Sidebar } from '@components/Sidebar/Sidebar';

import MikaHeader from '@assets/mika_header.jpg';

export const ChatPage = () => {
	return (
		<div className="bg-white">
			<img src={MikaHeader} className="w-full h-[190px] -mt-6 object-cover" />
			<div className="pt-14 px-20">
				<div className="flex items-center gap-6 pb-6 mb-6 text-left border-b">
					<Headline headline="Chat with MIKA" />
					<OnlineTag />
				</div>
				<div className="flex flex-row gap-20">
					<div className="w-[900px]">
						<ChatBox />
						<ChatTextarea />
					</div>
					<Sidebar />
				</div>
			</div>
		</div>
	);
};
