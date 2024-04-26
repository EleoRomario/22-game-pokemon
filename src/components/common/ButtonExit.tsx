import { Exit } from "../../icons";
import { useGame } from "../../store/game";
import { ButtonUI } from "./ButtonUI";

export const ButtonExit = () => {
	const setInGame = useGame((state) => state.setInGame);

	const handleExit = () => {
		setInGame(false);
	};

	return (
		<ButtonUI
			icon={Exit}
			label=""
			onClick={handleExit}
			className="py-1 px-2"
		></ButtonUI>
	);
};
