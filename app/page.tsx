"use client";

import React from "react";

import AxiosExample from "@/components/fetch-data/FetchData";

const Home: React.FC = () => {
	return (
		<main className="p-8 flex overflow-x-auto">
			<AxiosExample />
		</main>
	);
};

export default Home;
