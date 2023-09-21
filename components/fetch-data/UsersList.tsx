"use client";

import React, { useState } from "react";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";

import FormDialog from "./fragments/FormDialog";
import UserForm, { AddUserType, UserType } from "./UserForm";

interface Props {
	users: UserType[];
	heading: string;
	handleDeleteUser: (userId: number) => void;
	handleEditUser: (user: UserType) => void;
	handleAddNewUser: (user: AddUserType) => void;
}

const ListUsers: React.FC<Props> = ({
	users,
	heading,
	handleDeleteUser: handleOnClickDeleteUser,
	handleAddNewUser,
	handleEditUser,
}) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
	const [userToEdit, setUserToEdit] = useState<UserType | null>(null);

	const AddUserBtn = (
		<button
			className="btn_sm_affirmative transition-colors duration-150"
			type="button"
			onClick={() => {
				setUserToEdit(null);
				setIsUserDialogOpen(true);
			}}
		>
			<span className="px-2">{messages.Buttons.btnAddUser}</span>
		</button>
	);

	const handleOnClickEditBtn = (user: UserType) => {
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
							<button className="btn_sm_danger" onClick={() => handleOnClickDeleteUser(user.id)}>
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
				{userToEdit ? (
					<UserForm setIsOpen={setIsUserDialogOpen} user={userToEdit} onEditUser={handleEditUser} />
				) : (
					<UserForm setIsOpen={setIsUserDialogOpen} onAddUser={handleAddNewUser} />
				)}
			</FormDialog>
		</div>
	);
};

export default ListUsers;
