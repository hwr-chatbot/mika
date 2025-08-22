import { ReactNode } from 'react';

type SidebarHeadlineProps = {
	icon?: ReactNode;
	headline: string;
};

export const SidebarHeadline = ({ icon, headline }: SidebarHeadlineProps) => {
	return (
		<div className="flex items-center gap-2 pb-4">
			{icon && <span className="flex-shrink-0">{icon}</span>}
			<p className="font-bold">{headline}</p>
		</div>
	);
};
