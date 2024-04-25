import "./App.css";
import { Game } from "./components/interfaces/Game";
import { MenuInitial } from "./components/interfaces/MenuInitial";
import { useGame } from "./store/game";

function App() {
	const gameInit = useGame((state) => state.gameInit);
	return (
		<main className="relative flex justify-center text-white min-h-screen p-20 items-center">
			<div className="layout -z-10 fixed top-0 left-0 right-0 bottom-0"></div>
			{!gameInit ? <MenuInitial /> : <Game />}
		</main>
	);
}

export default App;
