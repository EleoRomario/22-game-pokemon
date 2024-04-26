import { LoadingPokemon } from "../../animations/LoadingPokemon";
import { usePokemon } from "../../hooks/usePokemon";
import { Bubble } from "./Bubble";
export const Card = () => {
	const { pokemon, isLoading, error } = usePokemon();

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (isLoading) {
		return <LoadingPokemon />;
	}

	return (
		<div className="animate-zoom-in relative">
			<img
				src={pokemon?.img}
				className="absolute opacity-[0.01] -z-10 rounded-3xl scale-[500%] brightness-200"
			></img>
			<Bubble color={pokemon?.color} className="size-40">
				<img
					src={pokemon?.img}
					alt={pokemon?.name}
					className="h-20 z-20"
				/>
			</Bubble>
		</div>
	);
};
