import { useScoreGame } from "../store/score";

export const useScore = () => {
	const score = useScoreGame((state) => state.score);
	const level = useScoreGame((state) => state.level);

	const setScore = useScoreGame((state) => state.setScore);
	const setLevel = useScoreGame((state) => state.setLevel);

	return {
		score,
		level,
		setScore,
		setLevel,
	};
};
