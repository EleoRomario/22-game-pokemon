import "./App.css";
import { Light } from "./animations/Light";
import { Particles } from "./animations/Particles";
import { Game } from "./components/interfaces/Game";
import { MenuInitial } from "./components/interfaces/MenuInitial";
import { useGeneration } from "./hooks/useGeneration";
import { usePokemon } from "./hooks/usePokemon";
import { useGame } from "./store/game";

function App() {
	const inGame = useGame((state) => state.inGame);

	const { pokemon } = usePokemon();
	const { isLoading, error } = useGeneration();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;

	return (
		<main className="relative overflow-hidden bg-bg flex justify-center text-white min-h-screen items-center">
			<Light />
			<Particles className="absolute size-[80%]" quantity={80} />
			<div
				className="z-0 fixed w-96 h-96 bg-bg blur-[150px] rounded-full"
				style={{
					backgroundColor: pokemon?.color.concat("80"),
				}}
			></div>
			<div className="z-10">{!inGame ? <MenuInitial /> : <Game />}</div>
		</main>
	);
}

export default App;
