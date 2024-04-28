import { PATH_API } from "../constants/api";
import { colorNameToHex } from "../helpers/colorNameToHex";

export async function getPokemon(name: string) {
	const pokemon = await fetch(`${PATH_API}/pokemon/${name}`)
		.then((res) => res.json())
		.then((data) => data);

	const about = await fetch(pokemon.species.url)
		.then((res) => res.json())
		.then((data) => data);

	return {
		name: pokemon.name,
		img: pokemon.sprites.other.dream_world.front_default,
		color: colorNameToHex(about.color.name),
	};
}
