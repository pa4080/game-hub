import React, { MutableRefObject } from "react";

import { cn } from "@/lib/cn-utils";
import { GalleryItem } from "@/interfaces/gallery-item";

interface Props {
	item: GalleryItem;
	index: number;
	arr: GalleryItem[];
	mouseX: number;
	imagesRefs: MutableRefObject<(HTMLImageElement | null)[]>;
}

const GameCard_Image_Indicator: React.FC<Props> = ({ item, index, arr, mouseX, imagesRefs }) => {
	const widthPercent = 98;
	const sectorsLength = widthPercent / arr.length;

	const activeSector = Math.round(index * sectorsLength);
	const isActive =
		mouseX > 100 - widthPercent - 1 &&
		mouseX < widthPercent + 1 &&
		activeSector <= mouseX &&
		mouseX < activeSector + sectorsLength;

	if (isActive) {
		imagesRefs.current[index]?.classList.add("active");
	} else {
		imagesRefs.current[index]?.classList.remove("active");
	}

	return (
		<div
			className={cn(
				"game_card_indicator_item",
				isActive ? "bg-accent" : "bg-gray-500/80 dark:bg-gray-400/60"
			)}
			data-id={item.id}
			style={{
				width: `${98 / arr.length}%`,
			}}
		></div>
	);
};

export default GameCard_Image_Indicator;
