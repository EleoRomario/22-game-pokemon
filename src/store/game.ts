import { create } from "zustand";

interface GameState {
	gameInit: boolean;
	setGameInit: (value: boolean) => void;
}

export const useGame = create<GameState>((set) => ({
	gameInit: false,
	setGameInit: (value) => set({ gameInit: value }),
}));
