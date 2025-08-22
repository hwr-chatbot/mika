import { Link } from 'react-router-dom';

import { HWRIcon } from '@icons/HWRIcon';

export const Header = () => {
	return (
		<header>
			<div className="flex justify-between items-center px-20 pt-10 pb-14 bg-white">
				<a href="https://www.hwr-berlin.de/">
					<HWRIcon />
				</a>
				<nav className="flex items-center space-x-4">
					<a href="https://www.hwr-berlin.de/en/" className="text-sm text-[#4A4D50] hover:text-[#D40C2E]">
						Hochschule für Wirtschaft und Recht Berlin
					</a>
					<div className="mt-[2px] w-[1px] h-4 bg-[#C4C5C7]" />
					<a
						href="https://www.hwr-berlin.de/en/student-portal"
						className="text-sm text-[#4A4D50] hover:text-[#D40C2E]"
					>
						Student Portal
					</a>
					<div className="mt-[2px] w-[1px] h-4 bg-[#C4C5C7]" />
					<a
						href="https://www.hwr-berlin.de/en/press"
						className="text-sm text-[#4A4D50] hover:text-[#D40C2E]"
					>
						Press
					</a>
				</nav>
			</div>
			<div className="font-bold -mt-6 ml-32 flex justify-left items-center relative z-10">
				<Link to="/">
					<button className="bg-[#D50C2F] underline-offset-4 decoration-1 hover:underline hover:pb-[10px] hover:pt-[6px] py-2 px-8 w-auto text-xl text-center line align-middle text-white cursor-pointer h-[50px]">
						Chat with MIKA
					</button>
				</Link>
				<Link to="/feedback">
					<button className="bg-[#D50C2F] underline-offset-4 decoration-1 hover:underline hover:pb-[10px] hover:pt-[6px] py-2 px-8 w-auto text-xl text-center line align-middle text-white cursor-pointer h-[50px]">
						Feedback
					</button>
				</Link>
				<Link to="/about">
					<button className="bg-[#D50C2F] underline-offset-4 decoration-1 hover:underline hover:pb-[9px] hover:pt-[7px] py-2 px-8 w-auto text-xl text-center line align-middle text-white cursor-pointer h-[50px]">
						About the project
					</button>
				</Link>
			</div>
		</header>
	);
};
