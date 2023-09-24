"use client";

import React from "react";

import useRawgGames from "@/hooks/useRawgGames";

import { cn } from "@/lib/cn-utils";

import GameCard from "./GameCard";

interface Props {
	className?: string;
}

const GameGrid: React.FC<Props> = ({ className }) => {
	const { games, getGamesBy, error, isLoading } = useRawgGames();

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

			{isLoading || !games ? (
				<div>Loading...</div>
			) : (
				<div>{games?.results.map((game, index) => <GameCard key={index} game={game} />)}</div>
			)}

			{error && <p className="text-lg text-red-500 font-semibold m-0">{error}</p>}
		</div>
	);
};

export default GameGrid;
