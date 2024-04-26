import "./App.css";
import { Particles } from "./animations/Particles";
import { Game } from "./components/interfaces/Game";
import { MenuInitial } from "./components/interfaces/MenuInitial";
import { useGame } from "./store/game";

function App() {
	const gameInit = useGame((state) => state.gameInit);
	return (
		<main className="relative bg-[#0d1a35] flex justify-center text-white min-h-screen p-20 items-center">
			<Particles className="absolute size-[80%]" quantity={80} />
			<div className="z-0 fixed w-96 h-96 bg-accent blur-[150px] rounded-full"></div>
			<div className="z-10">{!gameInit ? <MenuInitial /> : <Game />}</div>
		</main>
	);
}

export default App;
