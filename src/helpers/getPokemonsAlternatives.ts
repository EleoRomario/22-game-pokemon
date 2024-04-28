import { ANSWER } from "../types/types";

export function getPokemonsAlternatives(pokemons: string[], pokemon: string) {
	const alternatives = pokemons.filter((p) => p !== pokemon);
	const randomAlternatives = alternatives.sort(() => Math.random() - 0.5);

	const answerAlternatives = randomAlternatives.slice(0, 3).map((p) => {
		return {
			name: p,
			isCorrect: false,
		};
	});
	const answer: ANSWER[] = [
		...answerAlternatives,
		{
			name: pokemon,
			isCorrect: true,
		},
	];

	return answer;
}
