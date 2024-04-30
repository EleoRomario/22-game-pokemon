import { useState } from "react";
import { getPokemonRandom } from "../helpers/getPokemonRandomt";
import { getPokemonsAlternatives } from "../helpers/getPokemonsAlternatives";
import { getPokemon } from "../libs/getPokemon";
import { useScoreGame } from "../store/score";
import { ANSWER } from "../types/types";
import { usePokemon } from "./usePokemon";
import { usePokemons } from "./usePokemons";

export const useQuestion = () => {
	const { pokemons } = usePokemons();
	const level = useScoreGame((state) => state.level);
	const question = useScoreGame((state) => state.question);
	const questionsAnswered = useScoreGame((state) => state.questionsAnswered);
	const setQuestion = useScoreGame((state) => state.setQuestion);
	const { addPokemon } = usePokemon();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | unknown>(null);

	const generateQuestion = async () => {
		try {
			if (level === 1) {
				if (pokemons) {
					const pokemon = getPokemonRandom(pokemons);
					if (!existPokemonInQuestions(pokemon)) {
						const question: ANSWER[] = getPokemonsAlternatives(
							pokemons,
							pokemon
						);

						const nameSelected = question.find((q) => q.isCorrect)
							?.name as string;

						setLoading(true);

						const data = await getPokemon(nameSelected);

						if (data) {
							setLoading(false);
						}

						addPokemon(data);
						setQuestion(question);
					}
				}
			}
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	const existPokemonInQuestions = (pokemon: string) => {
		return questionsAnswered.some((q) => q.name === pokemon);
	};

	return {
		question,
		generateQuestion,
		loading,
		error,
	};
};
