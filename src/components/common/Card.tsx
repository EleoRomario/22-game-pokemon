import { Bubble } from "./Bubble";
export const Card = () => {
	return (
		<div className="animate-zoom-in relative">
			<img
				src="/portada.svg"
				className="absolute opacity-[0.01] -z-10 rounded-3xl scale-[500%] brightness-200"
			></img>
			<Bubble color="#f2d94e" className="size-40">
				<img
					src="/portada.svg"
					alt="Juego adivina el pokemon"
					className="h-20 z-20"
				/>
			</Bubble>
		</div>
	);
};
