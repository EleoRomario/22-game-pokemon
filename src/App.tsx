import "./App.css";
import { Particles } from "./animations/Particles";
import { Game } from "./components/interfaces/Game";
import { MenuInitial } from "./components/interfaces/MenuInitial";
import { useGeneration } from "./hooks/useGeneration";
import { useGame } from "./store/game";

function App() {
	const inGame = useGame((state) => state.inGame);

	const { isLoading, error } = useGeneration();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;

	return (
		<main className="relative overflow-hidden bg-gradient-to-t to-cyan-900 via-blue-800 from-cyan-900 text-white text-shadow flex justify-center min-h-screen items-center">
			<Particles className="z-10 absolute size-[80%]" quantity={80} />
			<div className="z-0 fixed h-[30rem] w-[40rem] bg-cyan-600 blur-[100px] rounded-full"></div>
			<div className="z-10">{!inGame ? <MenuInitial /> : <Game />}</div>
		</main>
	);
}

export default App;
