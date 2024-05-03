import { useInitGame } from "../../hooks/useInitGame";
import { LogoColor, Pokeball } from "../../icons";
import { Button } from "../common/Button";

export const MenuInitial = () => {
	const { handleInitGame } = useInitGame();
	return (
		<div className="grid grid-cols-2 gap-10 justify-center relative items-center">
			<div className="flex justify-center relative">
				<img src="/portada.svg" className="h-96" />
			</div>
			<div className="flex justify-center flex-col items-center gap-5">
				<h1 className="text-5xl flex-col flex text-center">
					<span>Adivina el</span>
					<span>
						<LogoColor className="h-40 w-auto" />
					</span>
				</h1>
				<Button
					label="Iniciar"
					icon={Pokeball}
					onClick={handleInitGame}
				/>
			</div>
		</div>
	);
};
