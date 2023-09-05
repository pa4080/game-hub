"use client";

import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

import messages from "@/messages/en.json";

interface AppContextProps {
	messages: typeof messages;
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppContextProviderProps {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<AppContext.Provider
			value={{
				messages,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
