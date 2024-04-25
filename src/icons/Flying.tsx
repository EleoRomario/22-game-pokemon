import { SVGProps } from "react";

export const Flying = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			width="26"
			height="25"
			viewBox="0 0 26 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.5855 24.7231C24.1525 22.8254 24.9132 20.9567 24.9917 19.1169C25.153 15.2636 22.8667 12.3861 19.4723 10.3148C15.9002 8.13595 12.2289 7.59434 8.66092 5.96953C6.879 5.15506 4.74979 3.82792 1.21076 1C0.0572672 4.06358 3.73687 8.98763 9.71105 11.5923C7.85885 11.6626 5.86608 11.0962 3.68726 9.69048C3.83609 13.5851 6.89967 15.983 13.709 16.9091C12.2785 17.3887 10.5669 17.4135 8.38392 16.7975C10.4801 23.8135 19.1581 18.7861 22.5855 24.7231Z"
				stroke="currentColor"
				strokeWidth="1"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
