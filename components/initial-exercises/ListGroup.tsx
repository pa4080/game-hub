"use client";

import React, { useState } from "react";

import { cn } from "@/lib/cn-utils";

interface Props {
	items: string[];
	heading: string;
	onSelectItem?: (item: string) => void;
}

const ListGroup: React.FC<Props> = ({ items, heading, onSelectItem }) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<div className="flex gap-3 items-start justify-between pr-2 flex-col">
			<h2 className="text-xl px-2">{heading}</h2>
			<ul className="mx-2 my-1 border rounded-lg overflow-hidden">
				{items.map((item, index, arr) => (
					<li
						key={index}
						className={cn(
							"px-4 py-2 cursor-pointer transition-colors duration-200",
							index !== arr.length - 1 && "border-b",
							selectedIndex === index ? "bg-gray-300" : "hover:bg-gray-200"
						)}
						onClick={() => {
							onSelectItem && onSelectItem(item);
							setSelectedIndex(index);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListGroup;
