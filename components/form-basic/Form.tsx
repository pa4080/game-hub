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

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="relative">
				<Input {...register("name")} label="Name" type="text" />
				{errors.name && <p className="form_input_error_message">{errors.name.message}</p>}
			</div>

			<div className="relative">
				<Input {...register("age", { valueAsNumber: true })} label="Age" type="number" />
				{errors.age && <p className="form_input_error_message">{errors.age.message}</p>}
			</div>

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
