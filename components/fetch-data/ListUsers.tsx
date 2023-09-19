"use client";

import React, { useState } from "react";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";

import { User } from "./FetchData";

interface Props {
	users: User[];
	heading: string;
	onDelete?: (userId: number) => void;
}

const ListGroup: React.FC<Props> = ({ users, heading, onDelete }) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<div>
			<h1 className="text-3xl px-2">{heading}</h1>
			<ul className="m-2 border rounded-lg overflow-hidden">
				{users.map((user, index, arr) => (
					<li
						key={index}
						className={cn(
							"px-4 py-2 pr-2 cursor-pointer transition-colors duration-200 flex gap-3 items-center justify-between w-full min-w-[20rem]",
							index !== arr.length - 1 && "border-b",
							selectedIndex === index ? "bg-gray-300" : "hover:bg-gray-200"
						)}
						onClick={() => {
							setSelectedIndex(index);
						}}
					>
						<span>{user.name}</span>

						<button className="btn_sm_danger" onClick={() => onDelete && onDelete(user.id)}>
							{messages.Buttons.btnDelete}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListGroup;
