import React, { MutableRefObject } from "react";

import { cn } from "@/lib/cn-utils";
import { GalleryItem } from "@/interfaces/gallery-item";

interface Item_Props {
	item: GalleryItem;
	index: number;
	arr: GalleryItem[];
	mouseX: number;
	imagesRefs: MutableRefObject<(HTMLImageElement | null)[]>;
}

const GameCard_Image_Indicator_Item: React.FC<Item_Props> = ({
	item,
	index,
	arr,
	mouseX,
	imagesRefs,
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

interface Indicator_Props {
	gallery: GalleryItem[] | undefined;
	mouseX: number;
	imagesRefs: MutableRefObject<(HTMLImageElement | null)[]>;
	className?: string;
}

const GameCard_Image_Indicator: React.FC<Indicator_Props> = ({
	gallery,
	mouseX,
	imagesRefs,
	className,
}) => {
	return (
		<div className={cn(className)}>
			{gallery?.map((item, index, arr) => (
				<GameCard_Image_Indicator_Item
					key={index}
					arr={arr}
					imagesRefs={imagesRefs}
					index={index}
					item={item}
					mouseX={mouseX}
				/>
			))}
		</div>
	);
};

export { GameCard_Image_Indicator_Item };
export default GameCard_Image_Indicator;
