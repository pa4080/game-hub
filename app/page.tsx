"use client";

import React from "react";

import Link from "next/link";

import { cn } from "@/lib/cn-utils";

const Home: React.FC = () => {
	const title = "List of the warmup exercises";

	const uriList = [
		{
			path: "/expenses-uri",
			name: "Expenses: Memorize the state in the URI",
			description:
				'Memorize the selected "category" by <code>usePathname()</code> and <code>useSearchParams()</code>',
		},
		{
			path: "/expenses",
			name: "Expenses: Use state",
			description: 'Memorize the selected "category" by <code>useState()</code>',
		},
		{
			path: "/users",
			name: "Users: Full form example",
			description:
				"Simulate connection to the backend. Manipulate list of users: Add, Edit, Delete - by using the full form validation.",
		},
		{
			path: "/form-full",
			name: "Form: Extended example",
			description: "Example of Form validation... one step further",
		},
		{
			path: "/form-basic",
			name: "Form: Validation example",
			description:
				"Example of Form validation by using <code>useForm()</code>, <code>Zod</code> and <code>zodResolver()</code>.",
		},
		{
			path: "/more",
			name: "Show more",
			description: "Exercise of use <code>{children}</code> and <code>useState()</code>.",
		},
		{
			path: "/list-group",
			name: "List group",
			description: "Exercise of simle table-like list creation.",
		},
	];

	return (
		<div className="p-8 max-w-lg">
			<div className="flex gap-3 items-center justify-between pr-2 ">
				<h1 className="text-3xl px-2">{title}</h1>
			</div>

			<ul className="mx-1 my-4 border rounded-lg overflow-hidden w-full">
				{uriList.map(({ name, path, description }, index, arr) => (
					<Link key={index} href={path}>
						<li
							className={cn(
								"px-4 py-2 pr-2 cursor-pointer transition-colors duration-200 flex flex-col items-start justify-between w-full min-w-[20rem] hover:bg-slate-200",
								index !== arr.length - 1 && "border-b"
							)}
						>
							<p className="font-semibold">{name}</p>
							{description && (
								<p
									dangerouslySetInnerHTML={{ __html: description }}
									className="text-sm italic opacity-80"
								/>
							)}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Home;
