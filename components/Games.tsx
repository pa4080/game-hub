"use client";

import React from "react";

import useRawgApi from "@/hooks/useRawgApi";
import { cn } from "@/lib/cn-utils";
import { RawgEndpoints } from "@/interfaces/rawg-endpoints";
import { RawgInterfaces } from "@/interfaces/rawg-interfaces";

import GameGrid from "./GameGrid";

interface Props {
	className?: string;
}

const Games: React.FC<Props> = ({ className }) => {
	const {
		items: games,
		getItemsBy: getGamesBy,
		error,
		isLoading,
	} = useRawgApi<RawgInterfaces[RawgEndpoints.GAMES]>(RawgEndpoints.GAMES);
	// const games: Games = items as Games;

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

			{isLoading || !games ? <div>Loading...</div> : <GameGrid games={games} />}

			{error && <p className="text-lg text-red-500 font-semibold m-0">{error}</p>}
		</div>
	);
};

export default Games;
