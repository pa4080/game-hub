"use client";

import React from "react";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { cn } from "@/lib/cn-utils";
import mockGames from "@/lib/mock-games";

import { Skeleton } from "./ui/skeleton";
import GameCard_Score from "./GameCard_Score";
import GameCard_Platforms from "./GameCard_Platforms";

interface Props {
	className?: string;
}

const Games_Skeleton: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("columns-1 sm:columns-2 xl:columns-3 gap-8", className)}>
			{mockGames?.map((game, index) => (
				<Skeleton
					key={index}
					className={cn(
						"w-full rounded-2xl overflow-hidden bg-slate-300 dark:bg-slate-800 drop-shadow-xl dark:shadow-xl",
						"mb-8"
					)}
				>
					<div className="relative w-full">
						<AspectRatio ratio={16 / 9}>
							<Skeleton className="object-cover object-top h-full w-full absolute top-0 left-0 bg-gray-400 dark:bg-gray-700 rounded-none" />
						</AspectRatio>
					</div>
					<div className="p-3">
						<div className="flex justify-between items-center w-full">
							<GameCard_Platforms
								className="text-gray-400 dark:text-gray-700"
								platforms={game.platforms}
							/>
							<GameCard_Score
								className="text-transparent opacity-40"
								score={7 * (index % 2) * (13 - index)}
							/>
						</div>
						<Skeleton
							className={`bg-gray-400 dark:bg-gray-700 w-fit h-7 text-transparent px-${
								8 + (index % 2)
							}`}
						>
							{game.name}
						</Skeleton>
					</div>
				</Skeleton>
			))}
		</div>
	);
};

export default Games_Skeleton;
