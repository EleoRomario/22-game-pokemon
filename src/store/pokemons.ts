import { create } from "zustand";

interface PokemonState {
	generation: string | null;
	pokemons: string[] | null;
	setPokemons: (value: string[]) => void;
	setGeneration: (value: string) => void;
}

export const usePokemonData = create<PokemonState>((set) => ({
	pokemons: null,
	generation: null,
	setPokemons: (value) => set({ pokemons: value }),
	setGeneration: (value) => set({ generation: value }),
}));
