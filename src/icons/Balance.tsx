import { SVGProps } from "react";

export const Balance = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 48 48"
		>
			<defs>
				<mask id="IconifyId18f1616ab07ffd2462">
					<g
						fill="none"
						stroke="#fff"
						strokeLinecap="round"
						strokeLinejoin="round"
						stroke-miterlimit="2"
						strokeWidth="4"
					>
						<path
							fill="#555"
							d="M35 25a32.234 32.234 0 0 0-22 0l-1-11c7-3 17-3 24 0z"
						/>
						<path d="m24 23l-3-5m21 21a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3z" />
						<path d="M29 23.455a32.222 32.222 0 0 0-10 0" />
					</g>
				</mask>
			</defs>
			<path
				fill="currentColor"
				d="M0 0h48v48H0z"
				mask="url(#IconifyId18f1616ab07ffd2462)"
			/>
		</svg>
	);
};
