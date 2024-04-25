import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ANSWER, POKEMON } from "../types/types";
import { getPokemons } from "../libs/getPokemons";
import { getPokemonsAlternatives } from "../helpers/getPokemonsAlternatives";

export const usePokemon = () => {
	const { isLoading, data, error } = useQuery({
		queryKey: ["pokemon"],
		queryFn: getPokemons,
	});

	const [pokemon, setPokemon] = useState<POKEMON | null>(null);
	const [alternatives, setAlternatives] = useState<ANSWER[]>([]);

	useEffect(() => {
		if (data) {
			const pokemons = getPokemonsAlternatives(data);
			const pokemon = data.find(
				(p) => p.name === pokemons.find((p) => p.isCorrect)?.name
			);
			setPokemon(pokemon);
			setAlternatives(pokemons);
		}
	}, [data]);

	return { pokemon, isLoading, error, alternatives };
};
