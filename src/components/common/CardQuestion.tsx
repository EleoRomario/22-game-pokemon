import { usePokemon } from "../../hooks/usePokemon";
import { Alternatives } from "./Alternatives";

export const CardQuestion = () => {
	const { pokemon, alternatives, isLoading, error } = usePokemon();
	console.log(alternatives);
	console.log(pokemon);

	return (
		<div className="w-96 h-auto bg-[#111111] relative rounded-3xl flex ">
			<div
				className="absolute top-0 left-0 bottom-0 right-0 rounded-3xl z-0"
				style={{
					backgroundSize: "100% 100%",
					backgroundPosition: "0px 0px",
					backgroundImage: `radial-gradient(142% 91% at 83% 7%, ${pokemon?.color}20 1%, #FF000000 99%)`,
				}}
			></div>
			{isLoading && <p>Loading...</p>}
			{error && <p>Error...</p>}
			{pokemon && (
				<div className="flex text-white flex-col items-center gap-4 p-10 z-10">
					<div className="h-60 w-full flex justify-center items-end">
						<img
							src={pokemon.img}
							alt={pokemon.name}
							className="h-80 aspect-square"
						/>
					</div>
					<Alternatives alternatives={alternatives} />
				</div>
			)}
		</div>
	);
};