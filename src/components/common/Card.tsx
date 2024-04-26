import { LoadingPokemon } from "../../animations/LoadingPokemon";
import { usePokemon } from "../../hooks/usePokemon";
import { CardContainer } from "./CardContainer";

export const Card = () => {
	const { pokemon, isLoading, error } = usePokemon();

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (isLoading) {
		return <LoadingPokemon />;
	}

	return (
		<div className="relative">
			<div
				className="absolute top-0 left-0 right-0 bottom-0 blur-3xl opacity-50 -z-10 animate-pulse rounded-3xl scale-105"
				style={{
					backgroundColor: pokemon?.color,
					backdropFilter: "blur(20px)",
				}}
			></div>
			<CardContainer
				className="animate-zoom-in w-32 h-40"
				pokemon={pokemon}
			>
				<img
					src={pokemon?.img}
					alt={pokemon?.name}
					className="h-full w-full scale-150 opacity-[0.02] absolute top-0 left-0 right-0 bottom-0 z-10"
				/>
				<img
					src={pokemon?.img}
					alt={pokemon?.name}
					className="h-32 z-20"
				/>
			</CardContainer>
		</div>
	);
};
