import { SVGProps } from "react";

export const PokeballAlternative = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 48 48"
		>
			<circle
				cx="23.99"
				cy="23.99"
				r="21.5"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle
				cx="23.99"
				cy="23.99"
				r="8.5"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M2.49 23.99h13m17 0h13"
			/>
		</svg>
	);
};
