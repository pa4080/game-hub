"use client";

import React from "react";

import Users from "@/components/fetch-data/Users";

const Home: React.FC = () => {
	return (
		<main className="p-8 flex overflow-x-auto">
			<Users />
		</main>
	);
};

export default Home;
