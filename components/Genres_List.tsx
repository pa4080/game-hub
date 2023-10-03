"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

import messages from "@/messages/en.json";
import { cn } from "@/lib/cn-utils";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { Interfaces } from "@/interfaces/rawg-interfaces";

import getCroppedImageUrl from "@/lib/get-rawg-cropped-image-url";

import { AspectRatio } from "./ui/aspect-ratio";

interface Props {
	className?: string;
	genres: Interfaces[Endpoints.GENRES];
}

const Genres_List: React.FC<Props> = ({ genres, className }) => {
	const [showAllGenres, setShowAllGenres] = useState(false);
	const toggleShowAllGenres = () => setShowAllGenres(!showAllGenres);

	const genresToShow = showAllGenres ? genres?.results : genres?.results.slice(0, 5);

	return (
		<div className={cn("flex flex-col gap-1", className)}>
			{genresToShow.map((genre, index) => (
				<div key={index} className="list_item">
					<div className="h-8 w-8 rounded-md bg-slate-400 dark:bg-slate-800 overflow-hidden">
						<AspectRatio ratio={1 / 1}>
							<Image
								alt={genre.name}
								className="object-cover object-top h-full w-full absolute top-0 left-0"
								height={40}
								priority={index < 5}
								src={getCroppedImageUrl(genre.image_background)}
								width={40}
							/>
						</AspectRatio>
					</div>
					<div className="line-clamp-1">{genre.name}</div>
				</div>
			))}
			<div className="list_item" onClick={toggleShowAllGenres}>
				<div
					className={cn(
						"h-8 w-8 rounded-md bg-slate-200 dark:bg-slate-900 overflow-hidden",
						"hover:bg-transparent",
						"flex items-center justify-center"
					)}
				>
					{showAllGenres ? <ChevronUp /> : <ChevronDown />}
				</div>
				<div className="line-clamp-1">
					{showAllGenres ? messages.Buttons.showLess : messages.Buttons.showMore}
				</div>
			</div>
		</div>
	);
};

export default Genres_List;
