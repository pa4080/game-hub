import React from "react";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";

import Input from "./ExpenseFormInput";
import ExpenseFilter from "./ExpenseFilter";

interface Props {
	className?: string;
}

const ExpenseForm: React.FC<Props> = ({ className }) => {
	return (
		<form className={cn("w-full mt-3", className)} onSubmit={(e) => e.preventDefault()}>
			<Input label="Description" type="text" />
			<Input label="Amount" type="number" />
			<ExpenseFilter className="category_choice" label="Category" />

			<button className="form_submit_btn transition-colors duration-150">
				{messages.Buttons.btnSubmit}
			</button>
		</form>
	);
};

export default ExpenseForm;
