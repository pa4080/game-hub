"use client";

import React from "react";

import AxiosExample from "@/components/fetch-data/Axios_ThenCatch_AbortController";

const Home: React.FC = () => {
	return (
		<main className="p-8 flex overflow-x-auto">
			<AxiosExample />
		</main>
	);
};

export default Home;
