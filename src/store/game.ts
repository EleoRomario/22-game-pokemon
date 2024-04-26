import { create } from "zustand";

interface GameState {
	gameInit: boolean;
	color: string;
	setGameInit: (value: boolean) => void;
	setColor: (value: string) => void;
}

export const useGame = create<GameState>((set) => ({
	gameInit: false,
	color: "#364eba",
	setGameInit: (value) => set({ gameInit: value }),
	setColor: (value) => set({ color: value }),
}));
