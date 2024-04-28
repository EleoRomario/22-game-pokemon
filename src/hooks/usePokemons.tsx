import { GENERATION } from "../types/types";
import { usePokemonData } from "../store/pokemons";

export const usePokemons = () => {
	const pokemons = usePokemonData((state) => state.pokemons);
	const generation = usePokemonData((state) => state.generation);
	const setPokemons = usePokemonData((state) => state.setPokemons);
	const setGeneration = usePokemonData((state) => state.setGeneration);

	const addPokemons = (generation: GENERATION) => {
		setGeneration(generation.generation);
		setPokemons(generation.pokemon_species);
	};

	return {
		pokemons,
		generation,
		addPokemons,
	};
};
