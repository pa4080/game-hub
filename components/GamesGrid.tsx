"use client";

import React from "react";

import { cn } from "@/lib/cn-utils";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { Interfaces } from "@/interfaces/rawg-interfaces";

import GameCard from "./GameCard";

interface Props {
	className?: string;
	games: Interfaces[Endpoints.GAMES];
}

const GamesGrid: React.FC<Props> = ({ games, className }) => {
	return (
		<div className={cn("columns-1 sm:columns-2 xl:columns-3 gap-8", className)}>
			{games?.results.map((game, index) => <GameCard key={index} className="mb-8" game={game} />)}
		</div>
	);
};

export default GamesGrid;
