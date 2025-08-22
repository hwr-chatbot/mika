import { useRef, useState, useEffect } from 'react';

import { ChatQuestion } from '@components/ChatTextarea/ChatQuestion';

type ChatQuestionsProps = {
	questions: string[];
};

export const ChatQuestions = ({ questions }: ChatQuestionsProps) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [showLeftFade, setShowLeftFade] = useState(false);
	const [showRightFade, setShowRightFade] = useState(false);

	const updateFades = () => {
		const el = scrollRef.current;
		if (!el) return;

		const scrollLeft = el.scrollLeft;
		const maxScrollLeft = el.scrollWidth - el.clientWidth;

		setShowLeftFade(scrollLeft > 1);
		setShowRightFade(scrollLeft < maxScrollLeft);
	};

	useEffect(() => {
		updateFades();
		const el = scrollRef.current;
		if (!el) return;

		el.addEventListener('scroll', updateFades);
		window.addEventListener('resize', updateFades);

		return () => {
			el.removeEventListener('scroll', updateFades);
			window.removeEventListener('resize', updateFades);
		};
	}, []);

	return (
		<div className="relative">
			<div
				className="flex flex-row gap-2 h-32 overflow-x-scroll overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
				ref={scrollRef}
				onScroll={updateFades}
			>
				{questions.map((q, idx) => (
					<ChatQuestion key={idx} question={q} />
				))}
			</div>

			{showLeftFade && (
				<div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent z-10" />
			)}
			{showRightFade && (
				<div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent z-10" />
			)}
		</div>
	);
};
