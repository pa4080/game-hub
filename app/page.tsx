"use client";

import React from "react";

import Expenses from "@/components/expense-tracker/ExpensesURI";

const Home: React.FC = () => {
	return (
		<main className="p-8 flex overflow-x-auto">
			<Expenses className="mx-auto" />
		</main>
	);
};

export default Home;
