import React, { MutableRefObject } from "react";

import { cn } from "@/lib/cn-utils";
import { GalleryItem } from "@/interfaces/gallery-item";

interface Props {
	item: GalleryItem;
	index: number;
	arr: GalleryItem[];
	mouseX: number;
	screenShotRefs: MutableRefObject<(HTMLImageElement | null)[]>;
}

const GameCard_Image_Indicator: React.FC<Props> = ({
	item,
	index,
	arr,
	mouseX,
	screenShotRefs,
}) => {
	const widthPercent = 98;
	const sectorsLength = widthPercent / arr.length;
	const activeSector = Math.round(index * sectorsLength);
	const isActive =
		mouseX > 100 - widthPercent - 1 &&
		mouseX < widthPercent + 1 &&
		activeSector <= mouseX &&
		mouseX < activeSector + sectorsLength;

	if (isActive) {
		screenShotRefs.current[index]?.classList.add("active");
	} else {
		screenShotRefs.current[index]?.classList.remove("active");
	}

	return (
		<div
			className={cn("game_card_indicator_item", isActive ? "bg-gray-400" : "bg-gray-400/50")}
			data-id={item.id}
			style={{
				width: `${98 / arr.length}%`,
			}}
		></div>
	);
};

export default GameCard_Image_Indicator;
