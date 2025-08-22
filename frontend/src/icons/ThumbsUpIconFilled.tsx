type ThumbsUpIconFilledProps = {
	width?: number | string;
	height?: number | string;
	color?: string;
};

export const ThumbsUpIconFilled = ({ width = 24, height = 24, color = '#000000' }: ThumbsUpIconFilledProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={width} height={height} fill="none">
			<rect x="2" y="16" width="5" height="14" fill={color} />
			<path
				d="M23,30H9V15.1973l3.0422-4.5635.8453-5.9165A2.0094,2.0094,0,0,1,14.8672,3H15a3.0033,3.0033,0,0,1,3,3v6h8a4.0045,4.0045,0,0,1,4,4v7A7.0078,7.0078,0,0,1,23,30Z"
				fill={color}
			/>
			<rect width="32" height="32" fill="none" />
		</svg>
	);
};
