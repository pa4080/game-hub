import React, { useState } from "react";

import { cn } from "@/lib/cn-utils";

import ExpenseList, { Expense } from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

interface Props {
	className?: string;
}

const Expenses: React.FC<Props> = ({ className }) => {
	const [selectedCategory, setSelectedCategory] = useState<string>("");

	const [expenses, setExpenses] = useState<Expense[]>([
		{
			id: "1",
			description: "Item 1",
			amount: 4,
			category: "Groceries",
		},
		{
			id: "2",
			description: "Item 2",
			amount: 5,
			category: "Utilities",
		},
		{
			id: "3",
			description: "Item 3",
			amount: 1,
			category: "Groceries",
		},
		{
			id: "4",
			description: "Item 4",
			amount: 4,
			category: "Utilities",
		},
		{
			id: "5",
			description: "Item 5",
			amount: 5,
			category: "Entertainment",
		},
		{
			id: "6",
			description: "Item 6",
			amount: 2,
			category: "Entertainment",
		},
	]);

	const handleItemDeleteById = (id: string) => {
		setExpenses(expenses.filter((expense) => expense.id !== id));
	};

	const handleSelectCategory = (category: string) => {
		setSelectedCategory(category);
	};

	const visibleExpenses = selectedCategory
		? expenses.filter((expense) => expense.category === selectedCategory)
		: expenses;

	return (
		<div className={cn("max-w-max flex flex-col items-end", className)}>
			<ExpenseFilter onSelectCategory={handleSelectCategory} />
			<ExpenseList expenses={visibleExpenses} onDelete={handleItemDeleteById} />
		</div>
	);
};

export default Expenses;
