"use client";

import React from "react";

import useRawgApi from "@/hooks/useRawgApi";
import { cn } from "@/lib/cn-utils";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { Interfaces } from "@/interfaces/rawg-interfaces";

import GameGrid from "./GameGrid";
import Games_Skeleton from "./Games_Skeleton";

interface Props {
	className?: string;
}

const Games: React.FC<Props> = ({ className }) => {
	const {
		items: games,
		getItemsBy: getGamesBy,
		error,
		isLoading,
	} = useRawgApi<Interfaces[Endpoints.GAMES]>(Endpoints.GAMES);

	return (
		<div className={cn("", className)}>
			<div className="flex gap-4 justify-center items-center mb-4 h-8">
				<button
					className="btn_sm_affirmative"
					disabled={!games?.previous}
					onClick={() => games?.previous && getGamesBy(games?.previous)}
				>
					Prev
				</button>

				<button
					className="btn_sm_affirmative"
					disabled={!games?.next}
					onClick={() => games?.next && getGamesBy(games?.next)}
				>
					Next
				</button>
			</div>

			{isLoading || !games ? <Games_Skeleton /> : <GameGrid games={games} />}

			{error && <p className="text-lg text-red-500 font-semibold m-0">{error}</p>}
		</div>
	);
};

export default Games;
