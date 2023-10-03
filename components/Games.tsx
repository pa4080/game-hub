"use client";

import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import useRawgApi from "@/hooks/useRawgApi";
import { cn } from "@/lib/cn-utils";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { Interfaces } from "@/interfaces/rawg-interfaces";

import Games_Grid from "./Games_Grid";
import Games_Skeleton from "./Games_Skeleton";
import { Button } from "./ui/button";

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
			<div className="flex gap-4 justify-between items-center mt-2 mb-8 h-8">
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

			{isLoading || !games ? <Games_Skeleton /> : <Games_Grid games={games} />}

			{error && <p className="text-lg text-red-500 font-semibold m-0">{error}</p>}
		</div>
	);
};

export default Games;
