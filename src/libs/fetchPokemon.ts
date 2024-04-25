import { PATH_API } from "../constants/api";
import { colorNameToHex } from "../helpers/colorNameToHex";
import { decimetersToMeters } from "../helpers/decimetersToMeters";
import { hectogramToKilogram } from "../helpers/hectogramToKilogram";
import { LANGUAGE, POKEMON_TYPE } from "../types/types";

export async function fetchPokemon() {
	const pikachu = "pikachu";
	try {
		const pokemon = await fetch(`${PATH_API}/pokemon/${pikachu}`)
			.then((res) => res.json())
			.then((data) => data);

		const about = await fetch(pokemon.species.url)
			.then((res) => res.json())
			.then((data) => data);

		const aboutEs = about.flavor_text_entries.find(
			(entry: LANGUAGE) => entry.language.name === "es"
		).flavor_text;

		const typesEs = await Promise.all(
			pokemon.types.map((type: POKEMON_TYPE) =>
				fetch(type.type.url).then((res) => res.json())
			)
		);

		const result = {
			name: pokemon.name,
			img: pokemon.sprites.other.dream_world.front_default,
			order: pokemon.order,
			typeEs: typesEs.map((type) => {
				return type.names.find(
					(name: LANGUAGE) => name.language.name === "es"
				).name;
			}),
			type: pokemon.types.map((type: POKEMON_TYPE) => {
				return type.type.name;
			}),
			about: aboutEs || about.flavor_text_entries[0].flavor_text,
			weight: hectogramToKilogram(pokemon.weight),
			height: decimetersToMeters(pokemon.height),
			color: colorNameToHex(about.color.name),
		};
		return result;
	} catch (error) {
		throw new Error("Error fetching pokemon");
	}
}
