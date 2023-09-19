import React, { ChangeEvent, useState } from "react";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";

import ExpenseList, { Expense } from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseFormDialog from "./ExpenseFormDialog";
import { ExpenseFormData } from "./ExpenseForm";

interface Props {
	className?: string;
}

const Expenses: React.FC<Props> = ({ className }) => {
	const [isAddExpenseDialogOpen, setIsAddExpenseDialogOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string>("");

	const [expenses, setExpenses] = useState<Expense[]>([
		{
			id: 1,
			description: "Item 1",
			amount: 4,
			category: "Groceries",
		},
		{
			id: 2,
			description: "Item 2",
			amount: 5,
			category: "Utilities",
		},
		{
			id: 3,
			description: "Item 3",
			amount: 1,
			category: "Groceries",
		},
		{
			id: 4,
			description: "Item 4",
			amount: 4,
			category: "Utilities",
		},
		{
			id: 5,
			description: "Item 5",
			amount: 5,
			category: "Entertainment",
		},
		{
			id: 6,
			description: "Item 6",
			amount: 2,
			category: "Entertainment",
		},
	]);

	const handleItemDeleteById = (id: number) => {
		setExpenses(expenses.filter((expense) => expense.id !== id));
	};

	const handleSelectCategory = (event: ChangeEvent<HTMLSelectElement>) => {
		const category = event.target.value;

		setSelectedCategory(category);
	};

	const visibleExpenses = selectedCategory
		? expenses.filter((expense) => expense.category === selectedCategory)
		: expenses;

	const handleAddExpense = (data: ExpenseFormData) => {
		const id = expenses.reduce((acc, expense) => Math.max(acc, expense.id), 0) + 1;

		setExpenses([...expenses, { id, ...data }]);
	};
	const AddExpenseBtn = (
		<button
			className="form_dialog_btn transition-colors duration-150"
			type="button"
			onClick={() => setIsAddExpenseDialogOpen(true)}
		>
			{messages.Buttons.btnAddExpense}
		</button>
	);

	return (
		<div className={cn("flex flex-col items-end min-w-[34rem]", className)}>
			<ExpenseFormDialog
				isOpen={isAddExpenseDialogOpen}
				setIsOpen={setIsAddExpenseDialogOpen}
				onSubmit={handleAddExpense}
			/>
			<div className="flex flex-row justify-between items-center w-full mb-6">
				{AddExpenseBtn}
				<ExpenseFilter onBlur={() => {}} onChange={handleSelectCategory} />
			</div>
			<ExpenseList expenses={visibleExpenses} onDelete={handleItemDeleteById} />
		</div>
	);
};

export default Expenses;
