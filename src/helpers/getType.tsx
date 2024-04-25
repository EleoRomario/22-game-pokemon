import { POKEMON_TYPES } from "../types/types";
import { getIconType } from "./getIconType";

export function getType(type: POKEMON_TYPES) {
	const color = (type: POKEMON_TYPES) => {
		switch (type) {
			case "normal":
				return "#123";
			case "fighting":
				return "#123";
			case "flying":
				return "#123";
			case "poison":
				return "#123";
			case "ground":
				return "#123";
			case "rock":
				return "#123";
			case "bug":
				return "#123";
			case "ghost":
				return "#123";
			case "steel":
				return "#123";
			case "fire":
				return "#123";
			case "water":
				return "#123";
			case "grass":
				return "#123";
			case "electric":
				return "#f1c40f";
			case "psychic":
				return "#123";
			case "ice":
				return "#123";
			case "dragon":
				return "#123";
			case "dark":
				return "#123";
			case "fairy":
				return "#123";
			default:
				return "#123";
		}
	};

	const icon = getIconType(type);

	return {
		color: color(type),
		icon,
	};
}
