"use client";

import React, { useState } from "react";

import ExpenseList, { Expense } from "@/components/expense-tracker/ExpenseList";

const Home: React.FC = () => {
	const [expenses, setExpenses] = useState<Expense[]>([
		{
			id: "1",
			description: "banana",
			amount: 4,
			category: "none",
		},
		{
			id: "2",
			description: "potato",
			amount: 5,
			category: "none",
		},
		{
			id: "3",
			description: "apple",
			amount: 1,
			category: "none",
		},
		{
			id: "4",
			description: "banana",
			amount: 4,
			category: "none",
		},
		{
			id: "5",
			description: "potato",
			amount: 5,
			category: "none",
		},
		{
			id: "6",
			description: "apple",
			amount: 2,
			category: "none",
		},
	]);

	const handleItemDeleteById = (id: string) => {
		setExpenses(expenses.filter((expense) => expense.id !== id));
	};

	return (
		<main className="p-8">
			<ExpenseList expenses={expenses} onDelete={handleItemDeleteById} />
		</main>
	);
};

export default Home;
