interface ButtonProps {
	label: string;
	icon: React.FC;
	onClick: () => void;
	className?: string;
}
export const Button = ({
	label,
	onClick,
	icon: Icon,
	className,
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`py-4 px-8 rounded-full border flex gap-2 uppercase hover:bg-accent/20  transition duration-300 ease-in-out hover:scale-105 ${className}`}
		>
			<Icon />
			{label}
		</button>
	);
};
