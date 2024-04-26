import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ANSWER, GENERATION, POKEMON } from "../types/types";
import { getPokemonsAlternatives } from "../helpers/getPokemonsAlternatives";
import { getGeneration } from "../libs/getGeneration";
import { fetchPokemon } from "../libs/fetchPokemon";
import { useGame } from "../store/game";

export const usePokemon = () => {
	const { isLoading, data, error } = useQuery<GENERATION>({
		queryKey: ["pokemon"],
		queryFn: getGeneration,
	});

	const setColor = useGame((state) => state.setColor);

	const [pokemon, setPokemon] = useState<POKEMON | null>(null);
	const [alternatives, setAlternatives] = useState<ANSWER[]>([]);

	useEffect(() => {
		const pokemons = async () => {
			if (data) {
				const pokemons = getPokemonsAlternatives(data.pokemon_species);
				const pokemon = await fetchPokemon(
					pokemons.find((p) => p.isCorrect)!.name
				);
				setPokemon(pokemon);
				setColor(pokemon.color);
				setAlternatives(pokemons);
			}
		};
		pokemons();
	}, [data]);

	return { pokemon, isLoading, error, alternatives };
};
