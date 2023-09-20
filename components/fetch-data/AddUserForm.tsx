import React, { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";

import Input from "./components/FormInput";

const userSchema = z.object({
	name: z.string().min(4, { message: messages.UserForm.schema.name }),
	username: z
		.string()
		.min(4, { message: messages.UserForm.schema.username_min })
		.max(16, { message: messages.UserForm.schema.username_max })
		.regex(/^[a-z0-9_]+$/, { message: messages.UserForm.schema.username_case }),
	email: z.string().email({ message: messages.UserForm.schema.email }),
});

export type AddUserFormData = z.infer<typeof userSchema>;

interface Props {
	className?: string;
	onSubmit: (data: AddUserFormData) => void;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddUserForm: React.FC<Props> = ({ className, onSubmit, setIsOpen }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<AddUserFormData>({
		resolver: zodResolver(userSchema),
	});

	return (
		<form
			className={cn("w-full mt-3", className)}
			onSubmit={handleSubmit((data) => {
				setIsOpen(false);
				reset();
				onSubmit(data);
			})}
		>
			<Input {...register("name")} errors={errors.name} label="Name" type="text" />
			<Input {...register("username")} errors={errors.username} label="Username" type="text" />
			<Input {...register("email")} errors={errors.email} label="Email" type="text" />

			<button className="form_submit_btn transition-colors duration-150 mt-2" type="submit">
				{messages.Buttons.btnSubmit}
			</button>
		</form>
	);
};

export default AddUserForm;
