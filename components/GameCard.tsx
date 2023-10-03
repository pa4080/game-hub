import React from "react";

import Image from "next/image";

import { Game } from "@/interfaces/rawg-endpoint-games-game";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/cn-utils";

import getCroppedImageUrl from "@/lib/get-rawg-cropped-image-url";

import GameCard_Platforms from "./GameCard_Platforms";
import GameCard_Score from "./GameCard_Score";

interface Props {
	game: Game;
	className?: string;
	priority?: boolean;
}

const GameCard: React.FC<Props> = ({ game, className, priority = false }) => {
	return (
		<div
			className={cn(
				"w-full rounded-2xl overflow-hidden bg-slate-300 dark:bg-slate-800 drop-shadow-xl dark:shadow-xl",
				className
			)}
		>
			{/* <div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg"> */}
			<div className="relative w-full">
				<AspectRatio ratio={16 / 9}>
					<Image
						alt={game.name}
						className="object-cover object-top h-full w-full absolute top-0 left-0"
						height={180}
						priority={priority}
						src={getCroppedImageUrl(game.background_image)}
						width={312}
					/>
				</AspectRatio>
			</div>
			{/* </div> */}
			<div className="p-3">
				<div className="flex justify-between items-center w-full">
					<GameCard_Platforms platforms={game.parent_platforms} />
					<GameCard_Score score={game.metacritic} />
				</div>
				<h3 className="font-semibold text-xl">{game.name}</h3>
			</div>
		</div>
	);
};

export default GameCard;
