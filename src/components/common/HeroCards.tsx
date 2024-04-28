import { PokeballColor } from "../../icons";
import { Bubble } from "./Bubble";
import { Card } from "./Card";

export const HeroCards = () => {
	return (
		<div className="relative ">
			<Bubble
				color="#f2d94e"
				className="absolute size-16 top-1/3 -left-28"
			>
				<PokeballColor className="size-5 -rotate-12 opacity-70" />
			</Bubble>
			<Card />
			<Bubble
				color="#f2d94e"
				className="absolute size-8 bottom-1/2 -right-20"
			>
				<PokeballColor className="size-3 rotate-45" />
			</Bubble>
		</div>
	);
};
