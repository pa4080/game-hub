"use client";

import React from "react";

import Form from "@/components/form/Form";

// import messages from "@/messages/en.json";

const Home: React.FC = () => {
	const handleSubmit = (data: unknown) => {
		// eslint-disable-next-line no-console
		console.log(data);
	};

	return (
		<main className="p-8">
			<Form onSubmit={handleSubmit} />
		</main>
	);
};

export default Home;
