"use client";

import React, { useEffect } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import useRawgApi from "@/hooks/useRawgApi";
import { cn } from "@/lib/cn-utils";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { Interfaces } from "@/interfaces/rawg-interfaces";

import { useAppContext } from "@/contexts/AppContext";

import Games_Grid from "./Games_Grid";
import Games_Skeleton from "./Games_Skeleton";
import { Button } from "./ui/button";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

interface Props {
	className?: string;
}

const Games: React.FC<Props> = ({ className }) => {
	const { gameQuery } = useAppContext();

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
				platforms:
					gameQuery?.parentPlatform?.platforms?.map((platform) => platform.id).join(",") ||
					gameQuery?.parentPlatform?.id,
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

				<div className="flex gap-4 justify-between w-full xs:w-fit xs:justify-end items-center">
					<Button
						className="btn_next_prev pl-2 pr-4"
						disabled={!games?.previous}
						onClick={() => games?.previous && getGamesBy(games?.previous)}
					>
						<ChevronLeft />
						<span>Prev</span>
					</Button>

					<Button
						className="btn_next_prev pl-4 pr-2"
						disabled={!games?.next}
						onClick={() => games?.next && getGamesBy(games?.next)}
					>
						<span>Next</span>
						<ChevronRight />
					</Button>
				</div>
			</div>

			{isLoading || !games ? (
				<Games_Skeleton />
			) : (
				<Games_Grid
					// games={selectedGenre ? getGamesBy([["genres", String(selectedGenre.id)]]) : games}
					games={games}
				/>
			)}

			{error && <p className="text-lg text-red-500 font-semibold m-0">{error}</p>}
		</div>
	);
};

export default Games;
