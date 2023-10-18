"use client";

import React from "react";

import ShowMore from "@/components/initial-exercises/ShowMore";

const Home: React.FC = () => {
	const lorem =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.";

	return (
		<main className="p-8 flex overflow-x-auto">
			<ShowMore length={100}>{lorem}</ShowMore>
		</main>
	);
};

export default Home;
