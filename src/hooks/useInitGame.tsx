import { useGame } from "../store/game";

export const useInitGame = () => {
	const setGameInit = useGame((state) => state.setGameInit);
	const setInGame = useGame((state) => state.setInGame);

	const handleInitGame = () => {
		setGameInit(true);
		setInGame(true);
	};
	return {
		handleInitGame,
	};
};
