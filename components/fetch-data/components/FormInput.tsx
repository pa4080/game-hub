import React, { ChangeEvent, ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";

import { cn } from "@/lib/cn-utils";

export type InputType = "text" | "email" | "password" | "tel" | "url" | "search" | "number";

interface Props {
	type: InputType;
	label?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
	autoComplete?: string;
	errors?: FieldError;
	className?: string;
}

const Input = forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
	const { label, errors, className, ...otherProps } = props;

	const id = `form-field-${label?.toLowerCase().replace(" ", "-")}`;

	return (
		<div className={cn("relative mb-8 w-full", className)}>
			<label className="form_text_input_label" htmlFor={id}>
				<p>{label}</p>
				<div className="mt-1">
					<input {...otherProps} ref={ref} className="form_field_text_input" id={id} />
				</div>
			</label>
			{errors && <p className="form_input_error_message">{errors.message}</p>}
		</div>
	);
});

Input.displayName = "Input";

export default Input;
