"use client";

import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

import messages from "@/messages/en.json";
import { Genre } from "@/interfaces/rawg-endpoint-genres-genre";

interface AppContextProps {
	messages: typeof messages;
	selectedGenre: Genre | null;
	setSelectedGenre: Dispatch<SetStateAction<Genre | null>>;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppContextProviderProps {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

	return (
		<AppContext.Provider
			value={{
				messages,
				selectedGenre,
				setSelectedGenre,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
