import { POKEMON_COLOR } from "../types/types";

export function colorNameToHex(color: POKEMON_COLOR): string {
	switch (color) {
		case "black":
			return "#000000";
		case "blue":
			return "#0000FF";
		case "brown":
			return "#A52A2A";
		case "gray":
			return "#808080";
		case "green":
			return "#008000";
		case "pink":
			return "#FFC0CB";
		case "purple":
			return "#800080";
		case "red":
			return "#FF0000";
		case "white":
			return "#FFFFFF";
		case "yellow":
			return "#FFFF00";
	}
}
