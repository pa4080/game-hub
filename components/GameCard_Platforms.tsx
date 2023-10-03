import React from "react";

import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { cn } from "@/lib/cn-utils";
import { ParentPlatform } from "@/interfaces/rawg-endpoint-games-platforms";

interface Props {
	className?: string;
	platforms: {
		platform: ParentPlatform;
	}[];
}

const GameCard_Platforms: React.FC<Props> = ({ className, platforms }) => {
	const iconStyle = "w-5 h-5";

	const iconMap: { [key: string]: React.ReactNode } = {
		pc: <FaWindows className={iconStyle} />,
		playstation: <FaPlaystation className={iconStyle} />,
		xbox: <FaXbox className={iconStyle} />,
		nintendo: <SiNintendo className={iconStyle} />,
		android: <FaAndroid className={iconStyle} />,
		ios: <FaApple className={iconStyle} />,
		linux: <FaLinux className={iconStyle} />,
		phone: <MdPhoneIphone className={iconStyle} />,
		web: <BsGlobe className={iconStyle} />,
	};

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
								{iconMap[platform.slug]}
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
