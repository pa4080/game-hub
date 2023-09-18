import React, { ChangeEvent, ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";

import messages from "@/messages/en.json";

import { cn } from "@/lib/cn-utils";

import { categories } from "./ExpenseForm";

interface Props {
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
	onBlur?: (event: ChangeEvent<HTMLSelectElement>) => void;
	className?: string;
	label?: string;
	errors?: FieldError;
}

const ExpenseFilter = forwardRef((props: Props, ref: ForwardedRef<HTMLSelectElement>) => {
	const { onChange, label, className = "category_filter", errors, ...otherProps } = props;

	const id = label
		? `form-field-${label.toLowerCase().replace(/[\s_]/, "-")}`
		: `${className}-select`;

	const select = (
		<select
			ref={ref}
			{...otherProps}
			className={cn("category_select", className)}
			id={id}
			size={1}
			onChange={(event) => onChange && onChange(event)}
		>
			<option value="">{label ? messages.Categories.select : messages.Categories.all}</option>
			{categories.map((category) => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	);

	if (label) {
		return (
			<div className={cn("relative mb-8 w-full", className)}>
				<label className="form_text_input_label" htmlFor={id}>
					<p>{label}</p>
					{select}
				</label>
				{errors && <p className="form_input_error_message">{errors.message}</p>}
			</div>
		);
	}

	return select;
});

ExpenseFilter.displayName = "ExpenseFilter";

export default ExpenseFilter;
