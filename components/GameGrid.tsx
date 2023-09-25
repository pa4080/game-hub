"use client";

import React from "react";

import { cn } from "@/lib/cn-utils";
import { RawgEndpoints } from "@/interfaces/rawg-endpoints";
import { RawgInterfaces } from "@/interfaces/rawg-interfaces";

import GameCard from "./GameCard";

interface Props {
	className?: string;
	games: RawgInterfaces[RawgEndpoints.GAMES];
}

const GameGrid: React.FC<Props> = ({ games, className }) => {
	return (
		<div className={cn("xs:columns-2 sm:columns-3 xl:columns-4 gap-8", className)}>
			{games?.results.map((game, index) => <GameCard key={index} className="mb-8" game={game} />)}
		</div>
	);
};

export default GameGrid;