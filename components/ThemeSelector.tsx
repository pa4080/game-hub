"use client";

/**
 * @see https://ui.shadcn.com/docs/dark-mode/next
 * @see https://tailwindcss.com/docs/dark-mode
 * @see https://github.com/pacocoursey/next-themes/issues/152
 * @see https://michaelangelo.io/blog/darkmode-rsc !!! !!! !!!
 */

import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import messages from "@/messages/en.json";

export type ThemeType = "light" | "dark" | "system" | undefined;

interface Props {
	theme: ThemeType | undefined;
}

const ThemeSelector: React.FC<Props> = ({ theme }) => {
	const router = useRouter();

	const setTheme = (themeToSet: ThemeType) => {
		switch (themeToSet) {
			case "light":
				Cookies.set("x-theme", "light");
				break;
			case "dark":
				Cookies.set("x-theme", "dark");
				break;
			default:
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
					Cookies.set("x-theme", "dark");
				} else {
					Cookies.set("x-theme", "light");
				}

				break;
		}

		router.refresh();
	};

	useEffect(() => {
		if (!theme) {
			setTheme("system");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="relative" size="icon" variant="outline">
					<Sun className="h-[1.2rem] w-[1.2rem] opacity-100 dark:opacity-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] opacity-0 dark:opacity-100" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="p-4">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					{messages.Theme.light}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>{messages.Theme.dark}</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					{messages.Theme.system}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
export default ThemeSelector;
