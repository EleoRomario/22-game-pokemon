import { useEffect, useState } from "react";
import { PokeballColor } from "../icons";

export const LoadingPokemon = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(!loading);
		}, 2000);

		return () => clearTimeout(timer);
	}, [loading]);

	return (
		<div className="relative  flex justify-center items-center">
			<PokeballColor
				className={`size-10 ${loading && "animate-tada"} z-10`}
			/>
			<div className="absolute size-20 animate-pulse blur-lg bg-white/20 rounded-full"></div>
			<div className="absolute size-10 animate-pulse blur bg-white rounded-full"></div>
			<div className="absolute animate-pulse blur-[3px] w-32 h-px bg-gradient-to-l to-transparent via-white from-transparent"></div>
			<div className="absolute animate-pulse blur-[2px] h-32 w-px bg-gradient-to-t to-transparent via-white from-transparent"></div>
		</div>
	);
};
