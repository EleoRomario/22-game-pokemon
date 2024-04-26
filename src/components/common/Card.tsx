import { usePokemon } from "../../hooks/usePokemon";

export const Card = () => {
	const { pokemon, isLoading, error } = usePokemon();

	return (
		<div
			className="w-40 h-48 relative rounded-xl p-px -z-10 overflow-hidden"
			style={{
				backgroundImage: `linear-gradient(to bottom, ${pokemon?.color}55, #1a1a1a)`,
				backdropFilter: "blur(3px)",
				boxShadow:
					"0 8px 16px 0 rgba(255,100,69,0),0 2px 10px 2px rgba(0,0,0,.2),inset 0 1px 1px 0 hsla(0,0%,100%,.11),0 1px 2px 0 rgba(0,0,0,.5),inset 0px 0px 30px -1px hsla(0,0%,100%,.01)",
			}}
		>
			<div className="absolute top-px left-px bottom-px right-px rounded-xl z-0 bg-bg">
				<div
					className="absolute top-0 right-0 size-1/2 rounded-full blur-3xl opacity-65"
					style={{
						backgroundColor: pokemon?.color,
					}}
				></div>
				<div
					className="absolute bottom-0 left-0 size-1/3 rounded-full blur-xl opacity-25"
					style={{
						backgroundColor: pokemon?.color,
					}}
				></div>
			</div>
			<div className="z-10 relative flex justify-center items-center h-full w-full">
				{isLoading && <span>loading</span>}
				{error && <span>Error al cargar el pokemon</span>}
				{pokemon && (
					<>
						<img
							src={pokemon?.img}
							alt={pokemon?.name}
							className="h-full w-full scale-150 opacity-[0.02] absolute top-0 left-0 right-0 bottom-0 z-10"
						/>
						<img
							src={pokemon?.img}
							alt={pokemon?.name}
							className="h-32 z-20"
						/>
					</>
				)}
			</div>
		</div>
	);
};
