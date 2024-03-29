"use client";

import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

import { GameQuery } from "@/interfaces/game-query";
import messages from "@/messages/en.json";
import { SortDropDownItem, Order } from "@/interfaces/sort-selector";
import { Genres } from "@/interfaces/rawg-endpoint-genres";
import { GalleryItem } from "@/interfaces/gallery-item";

interface AppContextProps {
	messages: typeof messages;
	gameQuery: GameQuery;
	setGameQuery: Dispatch<SetStateAction<GameQuery>>;
	sortOptions: SortDropDownItem[];
	setSortOptions: Dispatch<SetStateAction<SortDropDownItem[]>>;
	order: Order;
	setOrder: Dispatch<SetStateAction<Order>>;
	genres: Genres | undefined;
	setGenres: Dispatch<SetStateAction<Genres | undefined>>;
	gallery: GalleryItem[] | undefined;
	setGallery: Dispatch<SetStateAction<GalleryItem[] | undefined>>;
	isGalleryOpen: boolean;
	setIsGalleryOpen: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppContextProviderProps {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const [genres, setGenres] = useState<Genres>();
	const [gallery, setGallery] = useState<GalleryItem[]>();
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);

	// https://api.rawg.io/docs/#operation/games_list
	// "ordering" - Available fields: name, released, added, created, updated, rating, metacritic.
	// You can reverse the sort order adding a hyphen, for example: -released.
	const [sortOptions, setSortOptions] = useState<SortDropDownItem[]>([
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
				sortOptions,
				setSortOptions,
				order,
				setOrder,
				genres,
				setGenres,
				gallery,
				setGallery,
				isGalleryOpen,
				setIsGalleryOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
