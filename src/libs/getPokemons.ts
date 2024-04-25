import { fetchPokemon } from "./fetchPokemon";
import { getGeneration } from "./getGeneration";

export async function getPokemons() {
	const generation = await getGeneration();

	const pokemons = Promise.all(
		generation.pokemon_species.map(async (pokemon: string) => {
			return await fetchPokemon(pokemon);
		})
	);

	return pokemons;
}
