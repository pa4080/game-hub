import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

import messages from "@/messages/en.json";

import Input from "./Input";

const schema = z.object({
	name: z.string().min(4),
	age: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

interface Props {
	onSubmit: (data: FieldValues) => void;
}

const Form: React.FC<Props> = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const minAge = 18;

	// console.log(formState);
	// console.log(formState.errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register("name", {
					// This object have many options,
					// ref to: https://react-hook-form.com/api/useform/register
					required: true,
					minLength: 4,
				})}
				label="Name"
				type="text"
			/>
			{errors.name?.type === "required" && (
				<p className="form_input_error_message">Your name is required!</p>
			)}
			{errors.name?.type === "minLength" && (
				<p className="form_input_error_message">Your name must be at least 4 characters!</p>
			)}

			<Input {...register("age", { required: true, min: minAge })} label="Age" type="number" />
			{errors.age?.type === "required" && (
				<p className="form_input_error_message">Your age is required!</p>
			)}
			{errors.age?.type === "min" && (
				<p className="form_input_error_message">Your age must be at least {minAge}!</p>
			)}

			<button className="form_submit_btn transition-colors duration-150">
				{messages.Form.btnSubmit}
			</button>
		</form>
	);
};

export default Form;
