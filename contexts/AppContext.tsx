"use client";

import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

import { GameQuery } from "@/interfaces/game-query";
import messages from "@/messages/en.json";

interface AppContextProps {
	messages: typeof messages;
	gameQuery: GameQuery;
	setGameQuery: Dispatch<SetStateAction<GameQuery>>;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppContextProviderProps {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<AppContext.Provider
			value={{
				messages,
				gameQuery,
				setGameQuery,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
