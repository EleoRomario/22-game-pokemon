export const getPokemonRandom = (pokemons: string[]) => {
	return pokemons[Math.floor(Math.random() * pokemons.length)];
};
