import { LightbulbIcon } from '@icons/LightbulbIcon';
import { SpeakerIcon } from '@icons/SpeakerIcon';

import { SidebarHeadline } from './SidebarHeadline';

export const Sidebar = () => {
	return (
		<div className="mt-6 pl-6 text-left border-l">
			<SidebarHeadline icon={<SpeakerIcon width={20} height={20} />} headline="Introducing: MIKA" />
			<p>
				Welcome! 👋 MIKA is still a work in progress, so please keep in mind that the answers you get may not
				always be complete or fully accurate. Thank you for your patience and understanding while we continue to
				improve MIKA.
			</p>
			<div className="h-16" />
			<SidebarHeadline icon={<LightbulbIcon width={22} height={22} />} headline="Tips for using MIKA" />
			<p>
				Try asking short, clear questions using key words about your enquiry. MIKA will do its best to provide a
				helpful answer. Please note that MIKA does not remember past conversations, so each question starts
				fresh.
				<br />
				We also welcome your feedback at{' '}
				<a href="mailto:studienberatung@hwr-berlin.de" className="text-blue-600 hover:underline">
					studienberatung@hwr-berlin.de
				</a>
				.
			</p>
		</div>
	);
};
