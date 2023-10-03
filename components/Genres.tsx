"use client";

import React from "react";

import messages from "@/messages/en.json";
import useRawgApi from "@/hooks/useRawgApi";
import { cn } from "@/lib/cn-utils";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { Interfaces } from "@/interfaces/rawg-interfaces";

import Genres_List from "./Genres_List";
import Genres_Skeleton from "./Genres_Skeleton";

interface Props {
	className?: string;
}

const Genres: React.FC<Props> = ({ className }) => {
	const {
		items: genres,
		error,
		isLoading,
	} = useRawgApi<Interfaces[Endpoints.GENRES]>(Endpoints.GENRES);

	return (
		<div className={cn("", className)}>
			<h2 className="list_title">{messages.RawgEndpoints.genres}</h2>
			{isLoading || !genres ? <Genres_Skeleton /> : <Genres_List genres={genres} />}
			{error && <p className="text-base text-red-500 font-semibold m-0">{error}</p>}
		</div>
	);
};

export default Genres;
