import { ANSWER, POKEMON } from "../types/types";

export function getPokemonsAlternatives(pokemons: POKEMON[]) {
	const pokemon = pokemons[Math.floor(Math.random() * pokemons.length)].name;

	const alternatives = pokemons.filter((p) => p.name !== pokemon);
	const randomAlternatives = alternatives.sort(() => Math.random() - 0.5);

	const answerAlternatives = randomAlternatives.slice(0, 3).map((p) => {
		return {
			name: p.name,
			isCorrect: false,
		};
	});
	const answer: ANSWER[] = [
		...answerAlternatives,
		{
			name: pokemon,
			isCorrect: true,
		},
	] as ANSWER[];

	return answer;
}
