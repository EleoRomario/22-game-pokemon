import { create } from "zustand";

interface GameState {
	gameInit: boolean;
	color: string;
	inGame: boolean;
	setGameInit: (value: boolean) => void;
	setColor: (value: string) => void;
	setInGame: (value: boolean) => void;
}

export const useGame = create<GameState>((set) => ({
	gameInit: false,
	color: "#364eba",
	inGame: false,
	setGameInit: (value) => set({ gameInit: value }),
	setColor: (value) => set({ color: value }),
	setInGame: (value) => set({ inGame: value }),
}));
