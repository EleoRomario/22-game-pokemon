export interface POKEMON {
	name: string;
	img: string;
	color: string;
}

export interface POKEMON_TYPE {
	type: {
		name: string;
		url: string;
	};
}

export interface LANGUAGE {
	language: {
		name: string;
	};
}

export type POKEMON_COLOR =
	| "black"
	| "blue"
	| "brown"
	| "gray"
	| "green"
	| "pink"
	| "purple"
	| "red"
	| "white"
	| "yellow";

export type POKEMON_TYPES =
	| "normal"
	| "fighting"
	| "flying"
	| "poison"
	| "ground"
	| "rock"
	| "bug"
	| "ghost"
	| "steel"
	| "fire"
	| "water"
	| "grass"
	| "electric"
	| "psychic"
	| "ice"
	| "dragon"
	| "dark"
	| "fairy"
	| "unknown"
	| "shadow";

export interface ANSWER {
	name: string;
	isCorrect: boolean;
}

export interface GENERATION {
	generation: string;
	pokemon_species: string[];
}

export interface LEVEL {
	level: number;
	questions: ANSWER[][];
}
