import React, { Dispatch, SetStateAction } from "react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import messages from "@/messages/en.json";

import ExpenseForm from "./ExpenseForm";

interface Props {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ExpenseFormDialog: React.FC<Props> = ({ isOpen, setIsOpen }) => {
	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent className="border-slate-300">
				<DialogHeader>
					<DialogTitle>{messages.ExpenseForm.title}</DialogTitle>
					<DialogDescription>{messages.ExpenseForm.description}</DialogDescription>
				</DialogHeader>

				<ExpenseForm />
			</DialogContent>
		</Dialog>
	);
};

export default ExpenseFormDialog;
