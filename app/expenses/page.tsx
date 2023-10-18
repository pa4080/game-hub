"use client";

import React from "react";

import Expenses from "@/components/expense-tracker/Expenses";

const Home: React.FC = () => {
	return (
		<main className="p-8 flex overflow-x-auto">
			<Expenses />
		</main>
	);
};

export default Home;
