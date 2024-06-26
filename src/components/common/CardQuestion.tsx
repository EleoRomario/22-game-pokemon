import { usePokemon } from "../../hooks/usePokemon";
import { useQuestion } from "../../hooks/useQuestion";
import { Alternatives } from "./Alternatives";
import { useEffect, useState } from "react";
import { ButtonUI } from "./ButtonUI";
import { LoadingPokemon } from "../../animations/LoadingPokemon";

export const CardQuestion = () => {
	const { pokemon } = usePokemon();
	const { generateQuestion, loading } = useQuestion();
	const [isCorrect, setIsCorrect] = useState(false);
	useEffect(() => {
		generateQuestion();
	}, []);

	if (loading) return <LoadingPokemon />;

	return (
		<>
			{pokemon && (
				<div className="flex text-white flex-col items-center gap-4 p-10 z-20">
					<div className="h-60 w-full flex justify-center items-end">
						<img
							src={pokemon.img}
							alt={pokemon.name}
							className={`h-80 aspect-square ${
								!isCorrect &&
								"grayscale-100 brightness-0 select-none pointer-events-none"
							}`}
						/>
					</div>
					<p className="font-bold text-3xl">¿Qué POKÉMON es?</p>
					{isCorrect ? (
						<p className="text-2xl">
							¡Correcto! es {pokemon.name.toUpperCase()}
							<ButtonUI
								label="Siguiente"
								onClick={() => {
									setIsCorrect(false);
									generateQuestion();
								}}
							/>
						</p>
					) : (
						<Alternatives setIsCorrect={setIsCorrect} />
					)}
				</div>
			)}
		</>
	);
};
