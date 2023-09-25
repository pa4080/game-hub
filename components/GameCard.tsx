import React from "react";

import { Game } from "@/interfaces/rawg-endpoint-games-game";
import { cn } from "@/lib/cn-utils";

interface Props {
	game: Game;
	className?: string;
}

const GameCard: React.FC<Props> = ({ game, className }) => {
	return (
		<div className={cn("", className)}>
			<div>{game.name}</div>
		</div>
	);
};

export default GameCard;
