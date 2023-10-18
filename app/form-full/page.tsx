"use client";

import React from "react";

import { FieldValues } from "react-hook-form";

import Form from "@/components/form-full/Form";

const Home: React.FC = () => {
	const handleSubmit = (data: FieldValues) => {
		if (window) {
			window.alert("Form submitted: " + JSON.stringify(data));
		} else {
			// eslint-disable-next-line no-console
			console.log("Form submitted: " + JSON.stringify(data));
		}
	};

	return (
		<main className="p-8 flex overflow-x-auto">
			<Form onSubmit={handleSubmit} />
		</main>
	);
};

export default Home;
