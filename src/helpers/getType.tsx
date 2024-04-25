import { POKEMON_TYPES } from "../types/types";
import { getIconType } from "./getIconType";

export function getType(type: POKEMON_TYPES) {
	const color = (type: POKEMON_TYPES) => {
		switch (type) {
			case "normal":
				return "#7f8c8d";
			case "fighting":
				return "#e74c3c";
			case "flying":
				return "#81b9ef";
			case "poison":
				return "#9b59b6";
			case "ground":
				return "#c29867";
			case "rock":
				return "#4d534c";
			case "bug":
				return "#1abc9c";
			case "ghost":
				return "#8e44ad";
			case "steel":
				return "#2980b9";
			case "fire":
				return "#e67e22";
			case "water":
				return "#3498db";
			case "grass":
				return "#2ecc71";
			case "electric":
				return "#f1c40f";
			case "psychic":
				return "#ff6b6b";
			case "ice":
				return "#48dbfb";
			case "dragon":
				return "#5f27cd";
			case "dark":
				return "#222f3e";
			case "fairy":
				return "#f368e0";
			default:
				return "#8395a7";
		}
	};

	const icon = getIconType(type);

	return {
		color: color(type),
		icon,
	};
}
