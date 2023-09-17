import React, { ChangeEvent, ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";

export type InputType = "text" | "email" | "password" | "tel" | "url" | "search" | "number";

interface Props {
	label: string;
	type: InputType;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
	autoComplete?: string;
	errors: FieldError | undefined;
}

const Input = forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
	const { label, errors, ...otherProps } = props;

	const id = `form-field-${label.toLowerCase().replace(" ", "-")}`;

	return (
		<div className="relative sm:col-span-3 mb-8">
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
