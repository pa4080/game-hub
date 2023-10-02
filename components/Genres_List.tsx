"use client";

import React from "react";

import { cn } from "@/lib/cn-utils";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { Interfaces } from "@/interfaces/rawg-interfaces";

interface Props {
	className?: string;
	genres: Interfaces[Endpoints.GENRES];
}

const Genres_List: React.FC<Props> = ({ genres, className }) => {
	return (
		<div className={cn("flex flex-col gap-2", className)}>
			{genres?.results.map((genre, index) => (
				<div key={index} className="">
					{genre.name}
				</div>
			))}
		</div>
	);
};

export default Genres_List;
