import { create } from "zustand";
import { ANSWER, POKEMON } from "../types/types";

interface Score {
	score: number;
	level: number;
	pokemon: POKEMON | undefined;
	question: ANSWER[];
	questionsAnswered: ANSWER[];
	setPokemon: (pokemon: POKEMON) => void;
	setScore: (score: number) => void;
	setLevel: (level: number) => void;
	setQuestion: (question: ANSWER[]) => void;
	setQuestionsAnswered: (questionsAnswered: ANSWER[]) => void;
}

export const useScoreGame = create<Score>((set) => ({
	score: 0,
	level: 1,
	pokemon: undefined,
	question: [],
	questionsAnswered: [],
	setPokemon: (pokemon) => set({ pokemon }),
	setScore: (score) => set({ score }),
	setLevel: (level) => set({ level }),
	setQuestion: (question) => set({ question }),
	setQuestionsAnswered: (questionsAnswered) => set({ questionsAnswered }),
}));
