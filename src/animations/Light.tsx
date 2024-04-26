import { useGame } from "../store/game";

export const Light = () => {
	const color = useGame((state) => state.color);

	return (
		<div className="absolute h-56 w-40 top-0 flex justify-center">
			<div
				className="absolute size-full -translate-y-5 blur-lg -z-0 "
				style={{
					backgroundImage: `linear-gradient(to left, transparent, ${color}96,transparent)`,
					maskImage: `linear-gradient(to top, transparent 0%, black 100%)`,
				}}
			></div>
			<div
				className="absolute size-full z-10"
				style={{
					backgroundImage: `radial-gradient(30% 100% at 50% 0%, ${color} 0%, transparent 40%)`,
				}}
			></div>
			<div
				className="absolute size-full animate-pulse"
				style={{
					backgroundImage: `radial-gradient(60% 80% at 35% 0%, ${color}95 0%, transparent 50%)`,
				}}
			></div>
			<div
				className="absolute size-full animate-pulse"
				style={{
					backgroundImage: `radial-gradient(50% 90% at 65% 0%, ${color}95 0%, transparent 50%)`,
				}}
			></div>
			<div
				className="absolute size-full"
				style={{
					backgroundImage: `radial-gradient(10% 60% at 60% 0%, ${color}95 0%, transparent 50%)`,
				}}
			></div>
			<div
				className="absolute size-full animate-pulse"
				style={{
					backgroundImage: `radial-gradient(10% 80% at 30% 0%, ${color}95 0%, transparent 50%)`,
				}}
			></div>
			<div
				className="absolute  h-px w-52 "
				style={{
					backgroundImage: `linear-gradient(to left, transparent, ${color},transparent)`,
				}}
			></div>
		</div>
	);
};
