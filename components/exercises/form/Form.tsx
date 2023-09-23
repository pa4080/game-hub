import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import messages from "@/messages/en.json";

import Input from "./Input";

const requiredValues = {
	nameLength: 4,
	minAge: 18,
};

const schema = z.object({
	name: z.string({ required_error: "Your name is required!" }).min(4, {
		message: `Your name must be at least ${requiredValues.nameLength} characters long!`,
	}),
	age: z
		.number({ invalid_type_error: "Age field is required!" })
		.min(18, { message: `Your age must be at least ${requiredValues.minAge}!` }),
});

type FormData = z.infer<typeof schema>;

interface Props {
	onSubmit: (data: FieldValues) => void;
}

const Form: React.FC<Props> = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	// console.log(errors);
	// console.log(errors.age);
	// console.log(errors.name);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register("name")}
				autoComplete="name"
				errors={errors.name}
				label="Name"
				type="text"
			/>

			<Input
				{...register("age", { valueAsNumber: true })}
				autoComplete="off"
				errors={errors.age}
				label="Age"
				type="number"
			/>

			<button
				className="form_btn_submit transition-colors duration-150"
				//  disabled={!isValid}
			>
				{messages.Buttons.btnSubmit}
			</button>
		</form>
	);
};

export default Form;
