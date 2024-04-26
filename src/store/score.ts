import { create } from "zustand";
import { ANSWER } from "../types/types";

interface Score {
	score: number;
	level: number;
	questions: ANSWER[];
	questionsAnswered: number;
	setScore: (score: number) => void;
	setLevel: (level: number) => void;
	setQuestions: (questions: ANSWER[]) => void;
	setQuestionsAnswered: (questionsAnswered: number) => void;
}

export const useScoreGame = create<Score>((set) => ({
	score: 0,
	level: 1,
	questions: [],
	questionsAnswered: 0,
	setScore: (score) => set(() => ({ score })),
	setLevel: (level) => set(() => ({ level })),
	setQuestions: (questions) => set(() => ({ questions })),
	setQuestionsAnswered: (questionsAnswered) =>
		set(() => ({ questionsAnswered })),
}));
