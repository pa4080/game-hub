"use client";

import React from "react";

import { cn } from "@/lib/cn-utils";

import mockGenres from "@/lib/fake-genres";

import { Skeleton } from "./ui/skeleton";

interface Props {
	className?: string;
}

const Genres_Skeleton: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("components/Genres_List.tsx", className)}>
			{mockGenres?.map((genre, index) => (
				<div key={index} className="genre_item">
					<Skeleton className="h-8 w-8 rounded-md bg-slate-400 dark:bg-slate-800 overflow-hidden" />
					<Skeleton
						key={index}
						className={cn(
							"rounded-md bg-slate-300 dark:bg-slate-800 w-fit text-transparent",
							`px-${2 * (index % 2) + ((index + 1) % 2)}`
						)}
					>
						{genre.name}
					</Skeleton>
				</div>
			))}
		</div>
	);
};

export default Genres_Skeleton;
