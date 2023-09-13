import React, { ForwardedRef, forwardRef } from "react";

export type InputType = "text" | "email" | "password" | "tel" | "url" | "search" | "number";

interface Props {
	label: string;
	type: InputType;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string | number;
}

const Form_Input = forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
	const { label, type, onChange, value, ...otherProps } = props;

	const id = `form-field-${label.toLowerCase().replace(" ", "-")}`;

	return (
		<div className="sm:col-span-3 mb-2 last:mb-0">
			<label className="form_text_input_label" htmlFor={id}>
				<span>{label}</span>
				<div className="mt-1">
					<input
						value={value}
						onChange={onChange}
						{...otherProps}
						ref={ref}
						autoComplete="given-name"
						className="form_field_text_input"
						id={id}
						name={id}
						type={type}
					/>
				</div>
			</label>
		</div>
	);
});

Form_Input.displayName = "Input_Text";

export default Form_Input;
