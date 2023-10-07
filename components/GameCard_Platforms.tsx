import React from "react";

import { ParentPlatformsObjArr } from "@/interfaces/rawg-endpoint-platforms";
import { cn } from "@/lib/cn-utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { Platforms_IconsMap } from "./Platforms";

interface Props {
	className?: string;
	platforms: ParentPlatformsObjArr;
}

const GameCard_Platforms: React.FC<Props> = ({ className, platforms }) => {
	return (
		<div
			className={cn(
				"flex gap-1 w-2 overflow-visible items-center justify-start mt-1 mb-3",
				"text-gray-600 dark:text-gray-400",
				className
			)}
		>
			{platforms.map(({ platform }) => {
				return (
					<TooltipProvider key={platform.slug}>
						<Tooltip>
							<TooltipTrigger className="cursor-default" name="Game platform">
								{Platforms_IconsMap[platform.slug]}
							</TooltipTrigger>
							<TooltipContent>{platform.name}</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				);
			})}
		</div>
	);
};

export default GameCard_Platforms;
