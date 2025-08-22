import { BlueskyIcon } from '@icons/BlueskyIcon';
import { HWRIcon } from '@icons/HWRIcon';
import { InstagramIcon } from '@icons/InstagramIcon';
import { YouTubeIcon } from '@icons/YouTubeIcon';

export const Footer = () => {
	return (
		<footer>
			<div className="flex flex-col bg-white pt-20">
				<div className="border-t border-[#C4C5C7] mx-[20px] mb-5" />
				<div className="flex flex-row justify-between ml-[53px] py-12 px-[20px]">
					<HWRIcon />
					<div className="flex flex-row gap-6">
						<div className="flex flex-col gap-3 text-start w-[315px] text-sm">
							<a
								href="https://www.intranet.hwr-berlin.de/"
								target="_blank"
								className="hover:text-[#D40C2E]"
							>
								Intranet
							</a>
							<a
								href="https://www.hwr-berlin.de/en/hwr-berlin/service-units/hwr-berlin-library"
								className="hover:text-[#D40C2E]"
							>
								Library
							</a>
							<a
								href="https://www.hwr-berlin.de/en/hwr-berlin/service-units/dining-halls-and-cafeterias"
								className="hover:text-[#D40C2E]"
							>
								University Cafeterias and Dining Halls
							</a>
							<a
								href="https://it.hwr-berlin.de/en/welcome/"
								target="_blank"
								rel="noreferrer"
								className="hover:text-[#D40C2E]"
							>
								Information Technology
							</a>
							<a
								href="https://blog.hwr-berlin.de/elerner/home/"
								target="_blank"
								rel="noreferrer"
								className="hover:text-[#D40C2E]"
							>
								E-Learning Center
							</a>
						</div>
						<div className="flex flex-col gap-3 text-start w-[315px] text-sm">
							<a
								href="https://www.hwr-berlin.de/en/hwr-berlin/about-us/what-we-stand-for/locations/"
								className="hover:text-[#D40C2E]"
							>
								Contact
							</a>
							<a href="https://www.hwr-berlin.de/impressum" className="hover:text-[#D40C2E]">
								Imprint
							</a>
							<a href="https://www.hwr-berlin.de/en/data-privacy" className="hover:text-[#D40C2E]">
								Data Protection
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-row items-center justify-between h-[50px] bg-[#D40C2E] text-[#ffffff] py-8 px-10 font-bold">
					<p>© HWR Berlin 2025</p>
					<div className="flex flex-row items-center gap-4">
						<p className="pr-4">Bleiben Sie in Kontakt mit der HWR Berlin</p>
						<a className="cursor-pointer" href="https://bsky.app/profile/hwrberlin.bsky.social">
							<BlueskyIcon width={22} height={22} color="#ffffff" />
						</a>
						<a className="cursor-pointer" href="https://www.youtube.com/channel/UCl91CT5O62lr8JFIdozM7zw">
							<YouTubeIcon width={30} height={26} primary="#ffffff" secondary="#D40C2E" />
						</a>
						<a className="cursor-pointer" href="https://www.instagram.com/officialhwrberlin/">
							<InstagramIcon width={32} height={32} color="#ffffff" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
