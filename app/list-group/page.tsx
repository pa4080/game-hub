"use client";

import React from "react";

import ListGroup from "@/components/initial-exercises/ListGroup";

const Home: React.FC = () => {
	const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

	return (
		<main className="p-8 flex overflow-x-auto">
			<ListGroup heading="List group" items={items} />
		</main>
	);
};

export default Home;
