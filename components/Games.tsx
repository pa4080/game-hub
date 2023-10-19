"use client";

import React, { useEffect } from "react";

import useRawgApi from "@/hooks/useRawgApi";
import { cn } from "@/lib/cn-utils";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { Interfaces } from "@/interfaces/rawg-interfaces";

import { useAppContext } from "@/contexts/AppContext";

import scrollToTop from "@/lib/scroll-to-top";

import Games_Grid from "./Games_Grid";
import Games_Skeleton from "./Games_Skeleton";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import Games_Navigation from "./Games_Navigation";
import Games_Navigation_Float from "./Games_Navigation_Float";
import GameGallery from "./GameGallery";

interface Props {
	className?: string;
}

const Games: React.FC<Props> = ({ className }) => {
	const {
		gameQuery,
		messages: { Buttons: str },
	} = useAppContext();

	const {
		data: games,
		getDataBy: getGamesBy,
		error,
		isLoading,
	} = useRawgApi<Interfaces[Endpoints.GAMES]>(Endpoints.GAMES);

	useEffect(() => {
		getGamesBy({
			params: {
				genres: gameQuery?.genre?.id,
				// platforms:
				// 	gameQuery?.parentPlatform?.platforms?.map((platform) => platform.id).join(",") ||
				// 	gameQuery?.parentPlatform?.id,
				parent_platforms: gameQuery?.parentPlatform?.id,
				ordering: gameQuery?.sortOrder,
				search: gameQuery?.search,
			},
		});
	}, [getGamesBy, gameQuery]);

	return (
		<div className={cn("", className)}>
			<div className="flex gap-4 justify-between items-center mt-2 mb-8 h-fit flex-col xs:flex-row">
				<div className="flex gap-4 justify-between w-full xs:w-fit xs:justify-end items-center">
					<PlatformSelector />
					<SortSelector className="hidden md:block" />
				</div>

				<Games_Navigation
					nextCb={() => games?.next && getGamesBy(games?.next)}
					nextLink={games?.next}
					nextName={str.next}
					prevCb={() => games?.previous && getGamesBy(games?.previous)}
					prevLink={games?.previous}
					prevName={str.prev}
					upCb={() => scrollToTop()}
				/>
			</div>

			{isLoading || !games ? <Games_Skeleton /> : <Games_Grid games={games} />}

			{error && <p className="text-lg text-red-500 font-semibold m-0">{error}</p>}
			<Games_Navigation_Float
				nextCb={() => games?.next && getGamesBy(games?.next) && scrollToTop()}
				nextLink={games?.next}
				nextName={str.next}
				prevCb={() => games?.previous && getGamesBy(games?.previous) && scrollToTop()}
				prevLink={games?.previous}
				prevName={str.prev}
				upCb={() => scrollToTop()}
			/>
			<GameGallery />
		</div>
	);
};

export default Games;
