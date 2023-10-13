import * as React from "react";

import { cn } from "@/lib/cn-utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				ref={ref}
				className={cn(
					"flex h-10 w-full rounded-lg border-2 border-slate-300 dark:border-slate-700 bg-background px-3 py-2 text-base text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed focus-visible:border-slate-400  dark:focus-visible:border-slate-500 disabled:opacity-50 transition-colors duration-500 focus-visible:duration-0",
					className
				)}
				type={type}
				{...props}
			/>
		);
	}
);

Input.displayName = "Input";

export { Input };
