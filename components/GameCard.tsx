import React from "react";

import Image from "next/image";

import { Game } from "@/interfaces/rawg-endpoint-games-game";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/cn-utils";

interface Props {
	game: Game;
	className?: string;
}

const GameCard: React.FC<Props> = ({ game, className }) => {
	return (
		<div className={cn("w-full rounded-2xl overflow-hidden bg-gray-900", className)}>
			<div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg">
				<Image
					alt={game.name}
					className="object-cover object-top h-full w-full absolute top-0 left-0"
					height={180}
					src={game.background_image}
					width={312}
				/>
			</div>

			<div className="p-3">
				<h3 className="font-semibold text-xl">{game.name}</h3>
			</div>
		</div>
	);
};

export default GameCard;
