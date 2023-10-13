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
import { useAppContext } from "@/contexts/AppContext";

const FormSchema = z.object({
	searchText: z.string().min(3, {
		message: messages.Search.searchText,
	}),
});

interface Props {
	className?: string;
}

const SearchInput: React.FC<Props> = ({ className }) => {
	const { gameQuery, setGameQuery } = useAppContext();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			searchText: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		setGameQuery({
			...gameQuery,
			search: data.searchText,
		});
	}

	const handleClearSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		form.reset();

		if (gameQuery?.search) {
			setGameQuery({
				...gameQuery,
				search: undefined,
			});
		}
	};

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
									<Input
										className="pr-12"
										placeholder={
											messages.Search.searchPlaceholder +
											"lorem ipsum dolor sit amet consectetur adipiscing elit mauris vulputate"
										}
										{...field}
									/>
								</FormControl>
								<FormMessage className="absolute -bottom-6 left-3 line-clamp-1 w-auto" />
							</FormItem>
						)}
					/>
					<div className="absolute top-0 right-2 gap-1 flex flex-row-reverse justify-end items-center">
						<Button
							className="bg-transparent text-slate-500 hover:text-accent hover:bg-transparent px-1 py-0"
							type="submit"
						>
							<Search />
						</Button>

						{form.getValues("searchText") && (
							<Button
								className="bg-transparent text-slate-500 hover:text-accent hover:bg-transparent px-1 py-0"
								onClick={(e) => handleClearSearch(e)}
							>
								<SearchX />
							</Button>
						)}
					</div>
				</div>
			</form>
		</Form>
	);
};

export default SearchInput;
