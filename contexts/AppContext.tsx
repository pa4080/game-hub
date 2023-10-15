"use client";

import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

import { GameQuery } from "@/interfaces/game-query";
import messages from "@/messages/en.json";
import { SortDropDownItem, Order } from "@/interfaces/sort-selector";
import { Genres } from "@/interfaces/rawg-endpoint-genres";

interface AppContextProps {
	messages: typeof messages;
	gameQuery: GameQuery;
	setGameQuery: Dispatch<SetStateAction<GameQuery>>;
	dropDownItemsArr: SortDropDownItem[];
	setDropDownItemsArr: Dispatch<SetStateAction<SortDropDownItem[]>>;
	order: Order;
	setOrder: Dispatch<SetStateAction<Order>>;
	genres: Genres | undefined;
	setGenres: Dispatch<SetStateAction<Genres | undefined>>;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppContextProviderProps {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const [genres, setGenres] = useState<Genres>();

	// https://api.rawg.io/docs/#operation/games_list
	// "ordering" - Available fields: name, released, added, created, updated, rating, metacritic.
	// You can reverse the sort order adding a hyphen, for example: -released.
	const [dropDownItemsArr, setDropDownItemsArr] = useState<SortDropDownItem[]>([
		{
			value: "null",
			label: messages.Sort.relevance,
			selected: true,
		},
		...Object.keys(messages.Sort.fields).map(
			(key: string) =>
				({
					value: key,
					label: messages.Sort.fields[key as keyof typeof messages.Sort.fields],
					selected: false,
				}) as SortDropDownItem
		),
	]);
	const [order, setOrder] = useState<Order>("asc");

	return (
		<AppContext.Provider
			value={{
				messages,
				gameQuery,
				setGameQuery,
				dropDownItemsArr,
				setDropDownItemsArr,
				order,
				setOrder,
				genres,
				setGenres,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
