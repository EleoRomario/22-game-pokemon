interface ButtonProps {
	label: string;
	icon?: React.FC;
	onClick: () => void;
	className?: string;
}
export const ButtonUI = ({
	label,
	onClick,
	icon: Icon,
	className,
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`px-2 py-2 rounded-lg flex gap-2 uppercase bg-gray-500/10 hover:bg-gray-500/20  transition duration-300 items-center ease-in-out hover:scale-105 ${className}`}
		>
			{Icon && <Icon />}
			{label}
		</button>
	);
};
