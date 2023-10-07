"use client";

import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

import messages from "@/messages/en.json";
import { Genre } from "@/interfaces/rawg-endpoint-genres";
import { ParentPlatform } from "@/interfaces/rawg-endpoint-platforms";

interface AppContextProps {
	messages: typeof messages;
	selectedGenre: Genre | null;
	setSelectedGenre: Dispatch<SetStateAction<Genre | null>>;
	selectedParentPlatform: ParentPlatform | null;
	setSelectedParentPlatform: Dispatch<SetStateAction<ParentPlatform | null>>;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppContextProviderProps {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedParentPlatform, setSelectedParentPlatform] = useState<ParentPlatform | null>(null);

	return (
		<AppContext.Provider
			value={{
				messages,
				selectedGenre,
				setSelectedGenre,
				selectedParentPlatform,
				setSelectedParentPlatform,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
