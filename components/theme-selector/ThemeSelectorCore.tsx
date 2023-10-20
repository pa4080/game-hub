"use client";

/**
 * @see https://ui.shadcn.com/docs/dark-mode/next
 * @see https://tailwindcss.com/docs/dark-mode
 * @see https://github.com/pacocoursey/next-themes/issues/152
 * @see https://michaelangelo.io/blog/darkmode-rsc !!!
 */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Moon, Sun, SunMoon } from "lucide-react";

// Note import { cookies } from 'next/headers'
// can't be used in the client component at this moment
// https://nextjs.org/docs/app/api-reference/functions/cookies
import Cookies from "js-cookie";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import messages from "@/messages/en.json";
import { cn } from "@/lib/cn-utils";

export type ThemeType = "light" | "dark" | "system" | undefined;
export type ThemeMode = "manual" | "system" | undefined;

interface Props {
	theme: ThemeType;
	mode: ThemeMode;
}

const ThemeSelectorCore: React.FC<Props> = ({ theme, mode }) => {
	const router = useRouter();
	const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

	useEffect(() => {
		const detectDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

		const updateMode = (e: MediaQueryListEvent) => {
			setIsDark(e.matches);
		};

		detectDarkMode.addEventListener("change", updateMode);

		return () => {
			detectDarkMode.removeEventListener("change", updateMode);
		};
	});

	useEffect(() => {
		if (mode !== "manual") {
			Cookies.set("x-theme", isDark ? "dark" : "light");
			router.refresh();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDark]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					aria-label={messages.Theme.themeSelector}
					className="btn_ui relative"
					name={messages.Theme.themeSelector}
					size="icon"
					variant="outline"
				>
					<Sun
						className={cn(
							"h-[1.5rem] w-[1.5rem]",
							mode && theme && theme === "light" ? "block" : "hidden"
						)}
					/>
					<Moon
						className={cn(
							"h-[1.5rem] w-[1.5rem]",
							mode && theme && theme === "dark" ? "block" : "hidden"
						)}
					/>
					<SunMoon className={cn("h-[1.5rem] w-[1.5rem]", !mode ? "block" : "hidden")} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="p-4">
				<DropdownMenuItem
					onClick={() => {
						Cookies.set("x-theme", "light");
						Cookies.set("x-theme-mode", "manual");
						router.refresh();
					}}
				>
					{messages.Theme.light}
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						Cookies.set("x-theme", "dark");
						Cookies.set("x-theme-mode", "manual");
						router.refresh();
					}}
				>
					{messages.Theme.dark}
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						Cookies.set("x-theme", isDark ? "dark" : "light");
						Cookies.remove("x-theme-mode");
						router.refresh();
					}}
				>
					{messages.Theme.system}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
export default ThemeSelectorCore;
