import React, { FormEvent, useRef } from "react";

import messages from "@/messages/en.json";

import Form_Input from "./Form_Input";

interface Props {
	onSubmit: (arg: unknown) => void;
}

const Form: React.FC<Props> = ({ onSubmit }) => {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		if (nameRef.current && ageRef.current) {
			onSubmit({
				name: nameRef.current.value.trim(),
				age: parseInt(ageRef.current.value.trim()),
			});
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Form_Input ref={nameRef} label="Name" type="text" />
			<Form_Input ref={ageRef} label="Age" type="number" />

			<button className="form_submit_btn transition-colors duration-150">
				{messages.Form.btnSubmit}
			</button>
		</form>
	);
};

export default Form;
