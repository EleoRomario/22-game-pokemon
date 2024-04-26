import "./App.css";
import { Light } from "./animations/Light";
import { Particles } from "./animations/Particles";
import { Game } from "./components/interfaces/Game";
import { MenuInitial } from "./components/interfaces/MenuInitial";
import { useGame } from "./store/game";

function App() {
	const gameInit = useGame((state) => state.gameInit);
	const color = useGame((state) => state.color);
	return (
		<main className="relative bg-bg flex justify-center text-white min-h-screen p-20 items-center">
			<Light />
			<Particles className="absolute size-[80%]" quantity={80} />
			<div
				className="z-0 fixed w-96 h-96 bg-bg blur-[150px] rounded-full"
				style={{
					backgroundColor: color.concat("80"),
				}}
			></div>
			<div className="z-10">{!gameInit ? <MenuInitial /> : <Game />}</div>
		</main>
	);
}

export default App;
