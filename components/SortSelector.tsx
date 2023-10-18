import React from "react";
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
import { SortDropDownItem, Order } from "@/interfaces/sort-selector";

interface Props {
	className?: string;
	classNameTrigger?: string;
	classNameContent?: string;
	classNameOrder?: string;
	externalAction?: () => void;
}

const SortSelector: React.FC<Props> = ({
	className,
	classNameTrigger,
	classNameContent,
	classNameOrder,
	externalAction,
}) => {
	const { dropDownItemsArr, setDropDownItemsArr, order, setOrder, gameQuery, setGameQuery } =
		useAppContext();

	const updateSortOrder = (order: Order, dropDownItemsArr: SortDropDownItem[]) => {
		const selectedItem = dropDownItemsArr.find((item) => item.selected);
		const sortOrder =
			selectedItem?.value === "null" ? "" : `${order === "asc" ? "-" : ""}${selectedItem?.value}`;

		if (sortOrder !== "" || gameQuery?.sortOrder) {
			externalAction && externalAction();

			setGameQuery((prev) => ({
				...prev,
				sortOrder,
			}));
		}
	};

	const handleOnChange = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const selected = dropDownItemsArr.find((item) => item.selected);

		if (selected && selected?.value !== e.currentTarget?.platform.value) {
			const newDropDownItemsArr = dropDownItemsArr.map((item) => ({
				...item,
				selected: item.value === e.currentTarget?.platform.value,
			}));

			setDropDownItemsArr(newDropDownItemsArr);

			updateSortOrder(order, newDropDownItemsArr);
		}
	};

	const handleChangeOrder = () => {
		if (dropDownItemsArr.find((item) => item.selected)?.value !== "null") {
			const newOrder = order === "asc" ? "desc" : "asc";

			setOrder(newOrder);
			updateSortOrder(newOrder, dropDownItemsArr);
		}
	};

	return (
		<form action="submit" className={cn("w-full", className)} onChange={handleOnChange}>
			<div className="flex items-center justify-between gap-2 w-full">
				<Select name="platform">
					<SelectTrigger
						aria-label={messages.Sort.sortBy}
						className={cn("selector_trigger", "w-full xs:w-[156px]", classNameTrigger)}
						name={messages.Sort.sortBy}
						tabIndex={-1}
					>
						<SelectValue
							placeholder={(() => {
								const selectedLabel = dropDownItemsArr.find((item) => item.selected)?.label;

								return selectedLabel !== messages.Sort.relevance
									? selectedLabel
									: messages.Sort.sortBy;
							})()}
						></SelectValue>
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
						"btn_ui_div btn_ui_div_colors",
						dropDownItemsArr.find((item) => item.selected)?.value === "null"
							? "cursor-not-allowed"
							: "",
						classNameOrder
					)}
					onClick={handleChangeOrder}
				>
					{order === "asc" ? <ArrowDownNarrowWide /> : <ArrowUpNarrowWide />}
				</div>
			</div>
		</form>
	);
};

export default SortSelector;
