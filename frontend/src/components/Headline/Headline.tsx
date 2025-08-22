type HeadlineProps = {
	headline: string;
};

export const Headline = ({ headline }: HeadlineProps) => {
	return <h1 className="text-[#202020] text-4xl font-bold tracking-tight">{headline}</h1>;
};
