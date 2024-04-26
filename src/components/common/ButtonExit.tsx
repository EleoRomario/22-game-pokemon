import { Exit } from "../../icons";
import { useGame } from "../../store/game";
import { Button } from "./Button";

export const ButtonExit = () => {
	const setInGame = useGame((state) => state.setInGame);

	const handleExit = () => {
		setInGame(false);
	};

	return <Button icon={Exit} label="Salir" onClick={handleExit}></Button>;
};
