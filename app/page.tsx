"use client";

import React from "react";

import Form from "@/components/form/Form";

// import messages from "@/messages/en.json";

const Home: React.FC = () => {
	const handleSubmit = (arg: unknown) => {
		// eslint-disable-next-line no-console
		console.log(arg);
	};

	return (
		<main className="p-4">
			<Form onSubmit={handleSubmit} />
		</main>
	);
};

export default Home;
