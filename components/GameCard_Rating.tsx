import React from "react";

import Image, { StaticImageData } from "next/image";

import meh from "@/public/images/emojis/meh.webp";
import thumbsUp from "@/public/images/emojis/thumbs-up.webp";
import bullsEye from "@/public/images/emojis/bulls-eye.webp";

import messages from "@/messages/en.json";

import { cn } from "@/lib/cn-utils";

interface Emoji {
	src: StaticImageData;
	alt: string;
	width: number;
	height: number;
}

const ratingsMap: { [key: number]: Emoji } = {
	3: { src: meh, alt: messages.Rating.meh, width: 26, height: 26 },
	4: { src: thumbsUp, alt: messages.Rating.thumbsUp, width: 26, height: 26 },
	5: { src: bullsEye, alt: messages.Rating.bullsEye, width: 26, height: 26 },
};

interface Props {
	rating: number;
	className?: string;
	classNameNr?: string;
}

const GameCard_Rating: React.FC<Props> = ({ rating, className, classNameNr }) => {
	if (rating < 3) {
		return (
			<div className={cn("font-unicephalon text-foreground/30 text-xl", classNameNr)}>{rating}</div>
		);
	}

	const dispRating = rating > 5 ? 5 : rating;

	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<Image {...ratingsMap[dispRating]} unoptimized className={cn("", className)} loading="eager" />
	);
};

export default GameCard_Rating;
