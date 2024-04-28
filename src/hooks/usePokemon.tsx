import { getPokemonRandom } from "../helpers/getPokemonRandomt";
import { useScoreGame } from "../store/score";
import { POKEMON } from "../types/types";
import { usePokemons } from "./usePokemons";

export const usePokemon = () => {
	const { pokemons } = usePokemons();
	const pokemon = useScoreGame((state) => state.pokemon);
	const setPokemon = useScoreGame((state) => state.setPokemon);

	const addPokemon = (pokemon: POKEMON) => {
		setPokemon(pokemon);
	};

	const generatePokemon = () => {
		if (pokemons) {
			return getPokemonRandom(pokemons);
		}
	};

	return { pokemon, addPokemon, generatePokemon };
};
