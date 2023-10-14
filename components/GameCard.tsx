import React from "react";

import Image from "next/image";

import { Game } from "@/interfaces/rawg-endpoint-games-game";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/cn-utils";

import getCroppedImageUrl from "@/lib/get-rawg-cropped-image-url";

import GameCard_Platforms from "./GameCard_Platforms";
import GameCard_Score from "./GameCard_Score";
import GameCard_Rating from "./GameCard_Rating";

interface Props {
	game: Game;
	className?: string;
	priority?: boolean;
}

const GameCard: React.FC<Props> = ({ game, className, priority = false }) => {
	return (
		<div
			className={cn(
				"w-full rounded-2xl bg-slate-300 dark:bg-slate-800 drop-shadow-xl dark:shadow-xl break-inside-avoid-column",
				className
			)}
		>
			{/* <div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg"> */}
			<div className="relative w-full rounded-t-2xl overflow-hidden">
				<AspectRatio ratio={16 / 9}>
					<Image
						alt={game.name}
						className="object-cover object-top h-full w-full absolute top-0 left-0"
						height={180}
						priority={priority}
						src={
							game.background_image
								? getCroppedImageUrl(game.background_image)
								: "/images/no-signal.jpg"
						}
						// https://vercel.com/docs/image-optimization/limits-and-pricing#hobby
						unoptimized={process.env.NEXT_PUBLIC_ENV === "production"}
						width={320}
					/>
				</AspectRatio>
			</div>
			{/* </div> */}
			<div className="p-3">
				<div className="flex justify-between items-center w-full">
					<GameCard_Platforms platforms={game.parent_platforms} />
					<div className="flex items-center gap-3">
						<GameCard_Rating rating={game.rating_top} />
						<GameCard_Score score={game.metacritic} />
					</div>
				</div>
				<h3 className="font-semibold text-xl">{game.name}</h3>
			</div>
		</div>
	);
};

export default GameCard;
