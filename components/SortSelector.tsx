import React, { useEffect, useState } from "react";
import { ArrowUpNarrowWide, ArrowDownNarrowWide } from "lucide-react";

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
import { useAppContext } from "@/contexts/AppContext";

export const platformsIconStyle = "w-5 h-5";

interface DropDownItem {
	value: string;
	label: string;
	selected: boolean;
}

interface Props {
	className?: string;
	classNameTrigger?: string;
	classNameContent?: string;
	classNameOrder?: string;
}

const SortSelector: React.FC<Props> = ({
	className,
	classNameTrigger,
	classNameContent,
	classNameOrder,
}) => {
	// https://api.rawg.io/docs/#operation/games_list
	// "ordering" - Available fields: name, released, added, created, updated, rating, metacritic.
	// You can reverse the sort order adding a hyphen, for example: -released.
	const [dropDownItemsArr, setDropDownItemsArr] = useState<DropDownItem[]>([
		{
			value: "null",
			label: messages.Sort.relevance,
			selected: true,
		},
		...Object.keys(messages.Sort.fields).map(
			(key: string) =>
				({
					value: key,
					label: messages.Sort.fields[key as keyof typeof messages.Sort.fields],
					selected: false,
				}) as DropDownItem
		),
	]);
	const [order, setOrder] = useState<"asc" | "desc">("desc");

	const { setGameQuery } = useAppContext();

	const handleOnChange = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setDropDownItemsArr((prev) => {
			return prev.map((item) => ({
				...item,
				selected: item.value === e.currentTarget?.platform.value,
			}));
		});
	};

	const handleChangeOrder = () => {
		if (dropDownItemsArr.find((item) => item.selected)?.value !== "null") {
			setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
		}
	};

	useEffect(() => {
		const selectedItem = dropDownItemsArr.find((item) => item.selected);
		const queryOrder =
			selectedItem?.value === "null" ? "" : `${order === "asc" ? "-" : ""}${selectedItem?.value}`;

		if (selectedItem) {
			setGameQuery((prev) => ({
				...prev,
				sortOrder: queryOrder,
			}));
		}
	}, [order, dropDownItemsArr, setGameQuery]);

	return (
		<form action="submit" className={cn("w-full", className)} onChange={handleOnChange}>
			<div className="flex items-center justify-between gap-2 w-full">
				<Select name="platform">
					<SelectTrigger
						className={cn("selector_trigger", "w-full xs:w-[156px]", classNameTrigger)}
					>
						<SelectValue placeholder={messages.Sort.sortBy} />
					</SelectTrigger>
					<SelectContent className={cn("p-2 class", classNameContent)}>
						<SelectGroup>
							{dropDownItemsArr.map((item) => (
								<SelectItem key={item.value} className="block w-full" value={item.value}>
									<div className="select_item_inner w-full">
										<div className="select_item_label">{item.label}</div>
									</div>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>

				<div
					className={cn(
						"rounded-lg text-lg flex items-center justify-between bg-slate-300 hover:!bg-slate-500 dark:bg-slate-800 dark:hover:!bg-slate-700 h-full px-2 py-2 transition-colors duration-300",
						dropDownItemsArr.find((item) => item.selected)?.value === "null"
							? "cursor-not-allowed"
							: "",
						classNameOrder
					)}
					onClick={handleChangeOrder}
				>
					{order === "asc" ? <ArrowUpNarrowWide /> : <ArrowDownNarrowWide />}
				</div>
			</div>
		</form>
	);
};

export default SortSelector;
