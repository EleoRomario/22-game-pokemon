interface BubbleProps {
	className?: string;
	color: string | undefined;
	children: React.ReactNode;
}
export const Bubble = ({ className, children, color }: BubbleProps) => {
	return (
		<div
			className={`${className} animate-float aspect-square rounded-full flex justify-center items-center bg-[hsla(0,0%,100%,0.01)] backdrop-blur-[3px]`}
			style={{
				animationDelay: `${Math.random() * 2}s`,
				boxShadow: `0 80px 16px 0 rgba(255,100,69,0),0 2px 10px 2px rgba(0,0,0,.02),inset 0 1px 50px 0 ${color}20,0 1px 20px 0 rgba(255,255,255,.1),inset 0px 0px 30px -1px hsla(0,0%,100%,.01)`,
			}}
		>
			{children}
		</div>
	);
};
