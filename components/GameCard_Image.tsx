import React, { forwardRef } from "react";

import Image from "next/image";

import { cn } from "@/lib/cn-utils";
import { GalleryItem } from "@/interfaces/gallery-item";
import imgPlaceholder from "@/public/images/no-signal.jpg";
import getCroppedImageUrl from "@/lib/get-rawg-cropped-image-url";
import messages from "@/messages/en.json";

interface Props {
	item: GalleryItem;
	className?: string;
}

const GameCard_Image = forwardRef(
	(props: Props, ref: React.ForwardedRef<HTMLImageElement | null> | undefined) => {
		const { item, className } = props;

		return (
			<Image
				ref={ref}
				alt={`${messages.Common.imageFor}: ${item.id}`}
				className={cn("game_card_image", className)}
				height={180}
				src={item?.image ? getCroppedImageUrl(item.image) : imgPlaceholder}
				unoptimized={process.env.NEXT_PUBLIC_ENV === "production"}
				width={320}
			/>
		);
	}
);

GameCard_Image.displayName = "GameCard_Image";

export default GameCard_Image;
