"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Search, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/cn-utils";
import { useAppContext } from "@/contexts/AppContext";

export const FormSchemaGenerator = (messages?: string[]) => {
	return z.object({
		searchText: z.string().min(3, {
			message: messages?.shift(),
		}),
	});
};

interface Props {
	className?: string;
}

const SearchInput: React.FC<Props> = ({ className }) => {
	const {
		gameQuery,
		setGameQuery,
		messages: { Search: str, Buttons: strButtons },
	} = useAppContext();

	const FormSchema = FormSchemaGenerator([str.searchTextReq]);

	type FormSchema = z.infer<typeof FormSchema>;

	const form = useForm<FormSchema>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			searchText: "",
		},
	});

	function onSubmit(data: FormSchema) {
		setGameQuery({
			...gameQuery,
			search: data.searchText,
		});
	}

	const placeholder = `${str.search} ${str.in} ${gameQuery?.genre?.name ?? str.all} ${str.games} ${
		gameQuery?.parentPlatform?.name ? `for ${gameQuery?.parentPlatform?.name}` : ""
	} ${
		gameQuery?.sortOrder
			? `, ${str.sorted} ${str.by} ${gameQuery?.sortOrder} ${str.in} ${
					gameQuery?.sortOrder.match(/^-/) ? str.desc : str.asc
			  } ${str.order}`
			: ""
	}...`
		.replace(/-/g, "")
		.replace(/ {2,}/g, " ")
		.replace(/ ,/g, ",")
		.replace(/\s\.\.\./g, "...");

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
									<Input className="pr-12" placeholder={placeholder} {...field} />
								</FormControl>
								<FormMessage className="absolute -bottom-6 left-3 line-clamp-1 w-auto" />
							</FormItem>
						)}
					/>
					<div className="absolute top-0 right-2 gap-1 flex flex-row-reverse justify-end items-center">
						<Button
							aria-label={strButtons.search}
							className="bg-transparent text-slate-500 hover:text-accent hover:bg-transparent px-1 py-0"
							name={strButtons.search}
							type="submit"
						>
							<Search />
						</Button>

						{form.getValues("searchText") && (
							<Button
								aria-label={strButtons.discardSearch}
								className="bg-transparent text-slate-500 hover:text-accent hover:bg-transparent px-1 py-0"
								name={strButtons.discardSearch}
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
