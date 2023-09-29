import React from "react";

import { cn } from "@/lib/cn-utils";

interface Props {
	className?: string;
	score: number | null;
}

const GameCard_Score: React.FC<Props> = ({ className, score }) => {
	const color = (() => {
		if (!score) {
			return "bg-gray-700/20 dark:bg-gray-300/20";
		} else if (score > 75) {
			return "bg-green-700/50 dark:bg-green-700/20";
		} else if (score > 50) {
			return "bg-yellow-700/50 dark:bg-yellow-700/20";
		} else {
			return "bg-red-700/50 dark:bg-red-700/20";
		}
	})();

	return (
		<div
			className={cn(
				"w-fit py-[0.125rem] px-3 rounded-sm font-semibold text-white/60",
				color,
				className
			)}
		>
			{score ?? "--"}
		</div>
	);
};

export default GameCard_Score;
