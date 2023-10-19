import React, { forwardRef } from "react";

import Image from "next/image";

import { cn } from "@/lib/cn-utils";
import { GalleryItem } from "@/interfaces/gallery-item";
import imgPlaceholder from "@/public/images/no-signal.jpg";
import getImageUrl from "@/lib/get-rawg-cropped-image-url";
import messages from "@/messages/en.json";

interface Props {
	item: GalleryItem;
	className?: string;
	cropped?: boolean;
	unoptimized?: boolean;
	resolution?: [number, number];
	priority?: boolean;
}

const GameCard_Image = forwardRef(
	(props: Props, ref: React.ForwardedRef<HTMLImageElement | null> | undefined) => {
		const {
			item,
			className,
			cropped = true,
			unoptimized = false,
			resolution = [320, 180],
			priority = false,
		} = props;

		return (
			<Image
				ref={ref}
				alt={`${messages.Common.imageFor}: ${item.id}`}
				className={cn("", className)}
				height={resolution[1]}
				priority={priority}
				src={item?.image ? getImageUrl(item.image, cropped) : imgPlaceholder}
				unoptimized={unoptimized || process.env.NEXT_PUBLIC_ENV === "production"}
				width={resolution[0]}
			/>
		);
	}
);

GameCard_Image.displayName = "GameCard_Image";

export default GameCard_Image;
