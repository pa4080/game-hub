import React from "react";

import messages from "@/messages/en.json";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/cn-utils";
import useRawgApi from "@/hooks/useRawgApi";
import { Interfaces } from "@/interfaces/rawg-interfaces";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { useAppContext } from "@/contexts/AppContext";

export const platformsIconStyle = "w-5 h-5";

interface Props {
	className?: string;
	classNameTrigger?: string;
	classNameContent?: string;
}

const SortSelector: React.FC<Props> = ({ className, classNameTrigger, classNameContent }) => {
	const { setGameQuery } = useAppContext();
	const { data: platforms, error } = useRawgApi<Interfaces[Endpoints.PLATFORMS_PARENTS]>(
		Endpoints.PLATFORMS_PARENTS
	);

	if (error) {
		return null;
	}

	const handleOnChange = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// setGameQuery((prev) => ({
		// 	...prev,
		// 	parentPlatform:
		// 		platforms?.results.find((platform) => platform.slug === e.currentTarget?.platform.value) ??
		// 		null,
		// }));
	};

	return (
		<form action="submit" className={cn("w-full", className)} onChange={handleOnChange}>
			<Select name="platform">
				<SelectTrigger className={cn("selector_trigger", " w-full xs:w-[200px]", classNameTrigger)}>
					<SelectValue placeholder={messages.Sort.sortBy} />
				</SelectTrigger>
				<SelectContent className={cn("p-2 class", classNameContent)}>
					<SelectGroup>
						<SelectItem value={messages.Sort.relevance}>
							<div className="select_item_inner">
								<span>{messages.Sort.relevance}</span>
							</div>
						</SelectItem>
						<SelectItem value={messages.Sort.dateAdded}>
							<div className="select_item_inner">
								<span>{messages.Sort.dateAdded}</span>
							</div>
						</SelectItem>
						<SelectItem value={messages.Sort.name}>
							<div className="select_item_inner">
								<span>{messages.Sort.name}</span>
							</div>
						</SelectItem>
						<SelectItem value={messages.Sort.releaseDate}>
							<div className="select_item_inner">
								<span>{messages.Sort.releaseDate}</span>
							</div>
						</SelectItem>
						<SelectItem value={messages.Sort.popularity}>
							<div className="select_item_inner">
								<span>{messages.Sort.popularity}</span>
							</div>
						</SelectItem>
						<SelectItem value={messages.Sort.averageRating}>
							<div className="select_item_inner">
								<span>{messages.Sort.averageRating}</span>
							</div>
						</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</form>
	);
};

export default SortSelector;
