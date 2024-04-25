import { usePokemon } from "../hooks/usePokemon";
import { Balance, Rule } from "../icons";
import { TagTypePokemon } from "./TagTypePokemon";

export const CardPokemon = () => {
	const { isLoading, pokemon, error } = usePokemon();

	return (
		<section className="w-96 h-auto min-h-[586px] bg-accent relative rounded-3xl flex justify-center items-center">
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
				<div className="flex text-white flex-col items-center justify-center gap-4 p-10 z-10">
					<div className="h-60 w-full flex justify-center items-end">
						<img
							src={pokemon.img}
							alt={pokemon.name}
							className="h-80 aspect-square"
						/>
					</div>
					<p className="font-bold opacity-20">
						# {pokemon.order.toString().padStart(4, "0")}
					</p>
					<h2 className="text-2xl font-bold capitalize">
						{pokemon.name}
					</h2>
					<TagTypePokemon
						type={pokemon.type}
						typeEs={pokemon.typeEs}
					/>
					<p className="text-pretty text-xs text-gray-400">
						{pokemon.about}
					</p>
					<div className="grid grid-cols-2 w-full justify-items-center">
						<div className="flex flex-col gap-2 items-center">
							<span className="flex gap-2">
								<Balance className="text-gray-500" />
								{pokemon.weight}kg
							</span>
							<span className="text-xs text-gray-700">Peso</span>
						</div>
						<div className="flex flex-col gap-2 items-center">
							<span className="flex gap-2">
								<Rule className="text-gray-500" />
								{pokemon.height}m
							</span>
							<span className="text-xs text-gray-700">
								Altura
							</span>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};
