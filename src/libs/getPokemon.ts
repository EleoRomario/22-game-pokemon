export async function getPokemon() {
	const pokemon = "clefairy";

	const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
		.then((res) => res.json())
		.then((data) => data);
	return result;
}
