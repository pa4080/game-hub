"use client";

import React, { useState } from "react";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";

import { User } from "./Users";
import FormDialog from "./components/FormDialog";
import AddUserForm, { AddUserFormData } from "./AddUserForm";

interface Props {
	users: User[];
	heading: string;
	onDelete: (userId: number) => void;
	onAddNew: (user: AddUserFormData) => void;
}

const ListUsers: React.FC<Props> = ({ users, heading, onDelete, onAddNew }) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);

	const AddUserBtn = (
		<button
			className="btn_sm_add transition-colors duration-150"
			type="button"
			onClick={() => setIsAddUserDialogOpen(true)}
		>
			<span className="px-2">{messages.Buttons.btnAddUser}</span>
		</button>
	);

	return (
		<div>
			<div className="flex gap-3 items-center justify-between pr-2">
				<h1 className="text-3xl px-2">{heading}</h1>
				{AddUserBtn}
			</div>

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
			<FormDialog
				description={messages.UserForm.description}
				isOpen={isAddUserDialogOpen}
				setIsOpen={setIsAddUserDialogOpen}
				title={messages.UserForm.title}
			>
				<AddUserForm setIsOpen={setIsAddUserDialogOpen} onSubmit={onAddNew} />
			</FormDialog>
		</div>
	);
};

export default ListUsers;
