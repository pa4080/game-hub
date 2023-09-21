import React, { Dispatch, SetStateAction, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";

import Input from "./fragments/FormInput";

const userSchema = z.object({
	name: z.string().min(4, { message: messages.UserForm.schema.name }),
	username: z
		.string()
		.min(4, { message: messages.UserForm.schema.username_min })
		.max(16, { message: messages.UserForm.schema.username_max })
		.regex(/^[a-zA-Z0-9_.-]+$/, { message: messages.UserForm.schema.username_case }),
	email: z.string().email({ message: messages.UserForm.schema.email }),
	id: z.number().optional(),
});

export type UserType = z.infer<typeof userSchema>;
export type UserTypeDB = Required<UserType>;

interface Props {
	className?: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	onUserMutate: (data: UserType) => void;
	user: UserTypeDB | undefined;
}

const UserForm: React.FC<Props> = ({ className, setIsOpen, onUserMutate, user }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<UserType>({
		resolver: zodResolver(userSchema),
	});

	useEffect(() => {
		if (user) {
			reset(user);
		}
	}, [reset, user]);

	const handleOnSubmit = (data: UserType) => {
		setIsOpen(false);
		reset();
		user ? onUserMutate({ ...user, ...data }) : onUserMutate(data);
	};

	const handleOnCancelClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		setIsOpen(false);
		reset();
	};

	return (
		<form className={cn("w-full mt-3", className)} onSubmit={handleSubmit(handleOnSubmit)}>
			<Input {...register("name")} errors={errors.name} label="Name" type="text" />
			<Input {...register("username")} errors={errors.username} label="Username" type="text" />
			<Input {...register("email")} errors={errors.email} label="Email" type="text" />

			<div className="flex justify-between items-center">
				<button
					className="form_btn_cancel transition-colors duration-150 mt-2"
					type="submit"
					onClick={handleOnCancelClick}
				>
					{messages.Buttons.btnCancel}
				</button>
				<button className="form_btn_submit transition-colors duration-150 mt-2" type="submit">
					{messages.Buttons.btnSubmit}
				</button>
			</div>
		</form>
	);
};

export default UserForm;
