import React, { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";

import Input from "./ExpenseFormInput";
import ExpenseFilter from "./ExpenseFilter";

/**
 * According to the casting 'as [string]':
 * > The assertion provided in the course is 'as const',
 * > but it doesn't work in this case, where we are using '.map()'.
 * > All this is needed for 'z.enum(categories)' in the Zod validation schema.
 * @see https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45915814 [2:20]
 */
export const categories = Object.keys(messages.Categories)
	.map((key) => messages.Categories[key as keyof typeof messages.Categories])
	.filter(
		(category) => category !== messages.Categories.all && category !== messages.Categories.select
	) as [string];

const schema = z.object({
	description: z
		.string()
		.min(4, { message: messages.ExpenseForm.schema.description })
		.max(16, { message: messages.ExpenseForm.schema.description }),
	amount: z
		.number({ invalid_type_error: messages.ExpenseForm.schema.amount_type })
		.min(0.01, { message: messages.ExpenseForm.schema.amount })
		.max(100_000, { message: messages.ExpenseForm.schema.amount }),
	category: z.enum(categories, {
		errorMap: () => ({ message: messages.ExpenseForm.schema.category }),
		// Without this errorMap trick the produced error message is:
		// Invalid enum value. Expected 'Groceries' | 'Utilities' | 'Entertainment', received ''
	}),
});

export type ExpenseFormData = z.infer<typeof schema>;

interface Props {
	className?: string;
	onSubmit: (data: ExpenseFormData) => void;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ExpenseForm: React.FC<Props> = ({ className, onSubmit, setIsOpen }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ExpenseFormData>({
		resolver: zodResolver(schema),
	});

	return (
		<form
			className={cn("w-full mt-3", className)}
			onSubmit={handleSubmit((data) => {
				setIsOpen(false);
				reset();
				onSubmit(data);
			})}
		>
			<Input
				{...register("description")}
				errors={errors.description}
				label="Description"
				type="text"
			/>
			<Input
				{...register("amount", { valueAsNumber: true })}
				errors={errors.amount}
				label="Amount"
				type="number"
			/>
			<ExpenseFilter
				{...register("category")}
				className="category_choice"
				errors={errors.category}
				label="Category"
			/>

			<button className="form_submit_btn transition-colors duration-150 mt-2" type="submit">
				{messages.Buttons.btnSubmit}
			</button>
		</form>
	);
};

export default ExpenseForm;
