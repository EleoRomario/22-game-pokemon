import { LogoColor, Pokeball } from "../../icons";
import { useGame } from "../../store/game";
import { Button } from "../common/Button";
import { HeroCards } from "../common/HeroCards";

export const MenuInitial = () => {
	const setGameInit = useGame((state) => state.setGameInit);

	const handleInitGame = () => {
		setGameInit(true);
	};
	return (
		<div className="flex flex-col items-center gap-10 justify-center relative">
			<HeroCards />
			<h1 className="text-5xl flex-col flex text-center">
				<span>Adivina el</span>
				<span>
					<LogoColor className="h-40 w-auto" />
				</span>
			</h1>
			<Button label="Iniciar" icon={Pokeball} onClick={handleInitGame} />
		</div>
	);
};
