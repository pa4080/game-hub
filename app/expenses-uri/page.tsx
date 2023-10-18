"use client";

import React from "react";

import ExpensesUri from "@/components/expense-tracker/ExpensesUri";

const Home: React.FC = () => {
	return (
		<main className="p-8 flex overflow-x-auto">
			<ExpensesUri />
		</main>
	);
};

export default Home;
