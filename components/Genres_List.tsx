"use client";

import React from "react";

import Image from "next/image";

import { cn } from "@/lib/cn-utils";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { Interfaces } from "@/interfaces/rawg-interfaces";

import { AspectRatio } from "./ui/aspect-ratio";

interface Props {
	className?: string;
	genres: Interfaces[Endpoints.GENRES];
}

const Genres_List: React.FC<Props> = ({ genres, className }) => {
	return (
		<div className={cn("flex flex-col gap-4", className)}>
			{genres?.results.map((genre, index) => (
				<div key={index} className="flex gap-2 items-center justify-start">
					<div className="h-10 w-10 rounded-xl border-input drop-shadow-xl bg-slate-400 dark:bg-slate-800 overflow-hidden">
						<AspectRatio className="h-10 w-10" ratio={1 / 1}>
							<Image
								alt={genre.name}
								className="object-cover object-top h-full w-full absolute top-0 left-0"
								height={40}
								src={genre.image_background}
								width={40}
							/>
						</AspectRatio>
					</div>
					{genre.name}
				</div>
			))}
		</div>
	);
};

export default Genres_List;
