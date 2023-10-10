"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PiGameControllerFill } from "react-icons/pi";

import messages from "@/messages/en.json";
import { cn } from "@/lib/cn-utils";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { Interfaces } from "@/interfaces/rawg-interfaces";

import getCroppedImageUrl from "@/lib/get-rawg-cropped-image-url";

import { useAppContext } from "@/contexts/AppContext";

import { AspectRatio } from "./ui/aspect-ratio";

interface Props {
	className?: string;
	genres: Interfaces[Endpoints.GENRES];
	externalAction?: () => void;
}

const Genres_List: React.FC<Props> = ({ genres, className, externalAction }) => {
	const { gameQuery, setGameQuery } = useAppContext();

	const [showAllGenres, setShowAllGenres] = useState(false);
	const toggleShowAllGenres = () => setShowAllGenres(!showAllGenres);

	const genresToShow = showAllGenres ? genres?.results : genres?.results.slice(0, 5);

	if (gameQuery?.genre && !genresToShow.find((genre) => genre.id === gameQuery?.genre?.id)) {
		genresToShow.pop();
		genresToShow.push(gameQuery?.genre);
	}

	const handleOnGenreClick = (genre: Interfaces[Endpoints.GENRES]["results"][number]) => {
		externalAction && externalAction();
		setGameQuery((prev) => ({
			...prev,
			genre: genre,
		}));
	};

	const handleShowGAmesFromAllGenres = () => {
		externalAction && externalAction();
		setGameQuery((prev) => ({
			...prev,
			genre: null,
		}));
	};

	return (
		<div className={cn("flex flex-col gap-1", className)}>
			{genresToShow.map((genre, index) => (
				<button
					key={index}
					className={`list_item ${
						genre.id === gameQuery?.genre?.id ? "bg-slate-400 dark:bg-slate-700" : ""
					}`}
					name={genre.slug}
					onClick={() => handleOnGenreClick(genre)}
				>
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
					<div className="line-clamp-1 text-left">
						<span>{genre.name}</span>
					</div>
				</button>
			))}

			<div className="list_item" onClick={toggleShowAllGenres}>
				<div
					className={cn(
						"h-8 w-8 rounded-md bg-slate-200 dark:bg-slate-900 overflow-hidden",
						"flex items-center justify-center"
					)}
				>
					{showAllGenres ? <ChevronUp /> : <ChevronDown />}
				</div>
				<div className="line-clamp-1">
					{showAllGenres ? messages.Buttons.showLess : messages.Buttons.showMore}
				</div>
			</div>

			{gameQuery?.genre?.id && (
				<div className="list_item" onClick={handleShowGAmesFromAllGenres}>
					<div
						className={cn(
							"h-8 w-8 rounded-md bg-slate-400 dark:bg-slate-700 overflow-hidden",
							"flex items-center justify-center"
						)}
					>
						<PiGameControllerFill />
					</div>
					<div className="line-clamp-1">{messages.Buttons.showAll}</div>
				</div>
			)}
		</div>
	);
};

export default Genres_List;
