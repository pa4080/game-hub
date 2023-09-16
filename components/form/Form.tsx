import React from "react";
import { FieldValues, useForm } from "react-hook-form";

import messages from "@/messages/en.json";

import Input from "./Input";

interface Props {
	onSubmit: (data: FieldValues) => void;
}

const Form: React.FC<Props> = ({ onSubmit }) => {
	const { register, handleSubmit } = useForm();

	// eslint-disable-next-line no-console
	console.log(register("name"));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input {...register("name")} label="Name" type="text" />
			<Input {...register("age")} label="Age" type="number" />

			<button className="form_submit_btn transition-colors duration-150">
				{messages.Form.btnSubmit}
			</button>
		</form>
	);
};

export default Form;
