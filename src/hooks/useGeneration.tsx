import { useQuery } from "@tanstack/react-query";
import { getGeneration } from "../libs/getGeneration";
import { GENERATION } from "../types/types";
import { usePokemons } from "./usePokemons";
import { useEffect } from "react";

export const useGeneration = () => {
	const {
		isLoading,
		data: generation,
		error,
	} = useQuery<GENERATION>({
		queryKey: ["generation"],
		queryFn: () => getGeneration(),
	});

	const { addPokemons } = usePokemons();

	useEffect(() => {
		if (generation) {
			addPokemons(generation);
		}
	}, [generation]);

	return { generation, isLoading, error };
};
