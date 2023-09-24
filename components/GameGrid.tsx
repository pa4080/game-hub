"use client";

import React from "react";

import useRawgGames from "@/hooks/useRawgGames";

import { cn } from "@/lib/cn-utils";

interface Props {
	className?: string;
}

const GameGrid: React.FC<Props> = ({ className }) => {
	const { games, getGamesBy } = useRawgGames();

	return (
		<div className={cn("", className)}>
			<button onClick={() => getGamesBy([["page", "3"]])}>GameGrid</button>
			<br />
			<br />
			<div>{games?.results.map((game, index) => <div key={index}>{game.name}</div>)}</div>
		</div>
	);
};

export default GameGrid;
