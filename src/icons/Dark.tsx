import { SVGProps } from "react";

export const Dark = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M12 21a9 9 0 0 0 8.997-9.252a7 7 0 0 1-10.371-8.643A9 9 0 0 0 12 21"
			/>
		</svg>
	);
};
