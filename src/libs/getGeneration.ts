import { PATH_API } from "../constants/api";
import { LANGUAGE, POKEMON } from "../types/types";

export async function getGeneration() {
	const generation = 1;
	return await fetch(`${PATH_API}/generation/${generation}`)
		.then((response) => response.json())
		.then((data) => {
			return {
				generation: data.names.find(
					(name: LANGUAGE) => name.language.name === "es"
				).name,
				pokemon_species: data.pokemon_species.map(
					(pokemon: POKEMON) => pokemon.name
				),
			};
		})
		.catch((error) => {
			throw new Error(error);
		});
}
