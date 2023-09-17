import React from "react";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";

export interface Expense {
	id: string;
	description: string;
	amount: number;
	category: string;
}

interface Props {
	expenses: Expense[];
	onDelete: (id: string) => void;
}

const thClasses = cn("table_row_common", "font-semibold");
const tdClasses = cn("table_row_common", "font-normal");
const tfClasses = cn("table_row_common", "font-normal");

const formatToUSD = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

const ExpenseList: React.FC<Props> = ({ expenses, onDelete }) => {
	if (expenses.length === 0) {
		return null;
	}

	return (
		<div className="table_wrapper">
			<table className="table">
				<thead className="bg-slate-200">
					<tr>
						<th className={thClasses}>{messages.ExpenseList.description}</th>
						<th className={thClasses}>{messages.ExpenseList.amount}</th>
						<th className={thClasses + " min-w-[9rem]"}>{messages.ExpenseList.category}</th>
						<th className={thClasses + " min-w-[7rem]"}>{messages.ExpenseList.action}</th>
					</tr>
				</thead>
				<tbody className="[&>*:nth-child(even)]:bg-slate-100">
					{expenses.map((expense) => (
						<tr key={expense.id}>
							<td className={tdClasses}>{expense.description}</td>
							<td className={tdClasses}>{expense.amount}</td>
							<td className={tdClasses}>{expense.category}</td>
							<td className={tdClasses}>
								<button
									className="btn_sm_danger mx-auto block"
									onClick={() => onDelete(expense.id)}
								>
									{messages.Buttons.btnDelete}
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot className="bg-slate-200">
					<tr>
						<td className={tfClasses}>{messages.ExpenseList.total}</td>
						{/* <td>${expenses.reduce((acc, expense) => acc + expense.amount, 0).toFixed(2)}</td> */}
						<td className={tfClasses} colSpan={3}>
							{formatToUSD.format(expenses.reduce((acc, expense) => acc + expense.amount, 0))}
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default ExpenseList;
