"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Search, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import messages from "@/messages/en.json";
import { cn } from "@/lib/cn-utils";

const FormSchema = z.object({
	searchText: z.string().min(3, {
		message: messages.Search.searchText,
	}),
});

interface Props {
	className?: string;
}

const SearchInput: React.FC<Props> = ({ className }) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			searchText: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		// eslint-disable-next-line no-console
		console.log(data);
	}

	return (
		<Form {...form}>
			<form className={cn("w-2/3 space-y-6", className)} onSubmit={form.handleSubmit(onSubmit)}>
				<div className="w-full relative overflow-visible">
					<FormField
						control={form.control}
						name="searchText"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder={messages.Search.searchPlaceholder} {...field} />
								</FormControl>
								<FormMessage className="absolute -bottom-6 left-3 line-clamp-1 w-auto" />
							</FormItem>
						)}
					/>
					<Button
						className="absolute top-0 right-0 bg-transparent text-slate-500 hover:text-accent hover:bg-transparent"
						type="submit"
					>
						{form.getValues("searchText") ? <SearchX /> : <Search />}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default SearchInput;
