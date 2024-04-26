import confetti from "canvas-confetti";
import { usePokemon } from "../../hooks/usePokemon";
import { Alternatives } from "./Alternatives";
import { useEffect, useState } from "react";
import { LoadingPokemon } from "../../animations/LoadingPokemon";

export const CardQuestion = () => {
	const { pokemon, alternatives, isLoading, error } = usePokemon();

	const [alternativeCorrect, setAlternativeCorrect] =
		useState<boolean>(false);

	useEffect(() => {
		const time = setTimeout(() => {
			setAlternativeCorrect(false);
		}, 100);

		return () => clearTimeout(time);
	}, [alternativeCorrect]);

	const handleCorrect = (isCorrect: boolean) => {
		setAlternativeCorrect(!isCorrect);
		if (isCorrect) {
			confetti();
		}
	};

	if (isLoading) return <LoadingPokemon />;
	if (error) return <div>Error</div>;

	return (
		<>
			{pokemon && (
				<div className="flex text-white flex-col items-center gap-4 p-10 z-20">
					<div className="h-60 w-full flex justify-center items-end">
						<img
							src={pokemon.img}
							alt={pokemon.name}
							className="h-80 aspect-square"
						/>
					</div>
					<Alternatives
						alternatives={alternatives}
						onClick={handleCorrect}
					/>
				</div>
			)}
		</>
	);
};
