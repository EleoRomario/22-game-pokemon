import { create } from "zustand";

interface GameState {
	gameInit: boolean;
	inGame: boolean;
	setGameInit: (value: boolean) => void;
	setInGame: (value: boolean) => void;
}

export const useGame = create<GameState>((set) => ({
	gameInit: false,
	inGame: false,
	setGameInit: (value) => set({ gameInit: value }),
	setInGame: (value) => set({ inGame: value }),
}));
