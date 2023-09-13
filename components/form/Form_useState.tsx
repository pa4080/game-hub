import React, { FormEvent, useRef, useState } from "react";

import messages from "@/messages/en.json";

import Form_Input from "./Form_Input";

interface Props {
	onSubmit: (arg: unknown) => void;
}

const Form: React.FC<Props> = ({ onSubmit }) => {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const [person, setPerson] = useState({
		name: "",
		age: 0,
	});

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		onSubmit(person);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Form_Input
				ref={nameRef}
				label="Name"
				type="text"
				value={person.name}
				onChange={(e) => setPerson({ ...person, name: e.target.value })}
			/>
			<Form_Input
				ref={ageRef}
				label="Age"
				type="number"
				value={person.age}
				onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
			/>

			<button className="form_submit_btn transition-colors duration-150">
				{messages.Form.btnSubmit}
			</button>
		</form>
	);
};

export default Form;
