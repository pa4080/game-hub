"use client";

import React, { useState } from "react";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";

import FormDialog from "./fragments/FormDialog";
import UserForm, { UserType, UserTypeDB } from "./UserForm";

interface Props {
	users: UserTypeDB[];
	heading: string;
	handleDeleteUser: (userId: number) => void;
	handleUserMutate: (user: UserType) => void;
}

const ListUsers: React.FC<Props> = ({ users, heading, handleDeleteUser, handleUserMutate }) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
	const [userToEdit, setUserToEdit] = useState<UserTypeDB>();

	const AddUserBtn = (
		<button
			className="btn_sm_affirmative transition-colors duration-150"
			type="button"
			onClick={() => {
				setUserToEdit(undefined);
				setIsUserDialogOpen(true);
			}}
		>
			<span className="px-2">{messages.Buttons.btnAddUser}</span>
		</button>
	);

	const handleOnClickEditBtn = (user: UserTypeDB) => {
		setUserToEdit(user);
		setIsUserDialogOpen(true);
	};

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

						<div>
							<button
								className="btn_sm_affirmative mr-3"
								onClick={() => handleOnClickEditBtn(user)}
							>
								{messages.Buttons.btnEdit}
							</button>
							<button className="btn_sm_danger" onClick={() => handleDeleteUser(user.id)}>
								{messages.Buttons.btnDelete}
							</button>
						</div>
					</li>
				))}
			</ul>

			<FormDialog
				description={messages.UserForm[userToEdit ? "edit" : "add"].description}
				isOpen={isUserDialogOpen}
				setIsOpen={setIsUserDialogOpen}
				title={messages.UserForm[userToEdit ? "edit" : "add"].title}
			>
				<UserForm
					setIsOpen={setIsUserDialogOpen}
					user={userToEdit}
					onUserMutate={handleUserMutate}
				/>
			</FormDialog>
		</div>
	);
};

export default ListUsers;
