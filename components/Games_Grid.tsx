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

const Games_Grid: React.FC<Props> = ({ games, className }) => {
	return (
		<div className={cn("games_grid", className)}>
			{games?.results.map((game, index) => (
				<GameCard key={index} className="mb-8" game={game} priority={index < 2} />
			))}
			<div className="w-full h-6 sm:h-12 xl:h-72 mb-12 sm:mb-36 xl:mb-40 z-0">
				{/* Solve the problem with last child in a column hover */}
			</div>
		</div>
	);
};

export default Games_Grid;
