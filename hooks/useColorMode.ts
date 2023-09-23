"use client";
/**
 * @see https://tailwindcss.com/docs/dark-mode
 * @see https://usehooks.com/uselocalstorage
 */
import { useEffect, useState } from "react";

const useColorMode = () => {
	const [theme, setTheme] = useState<"light" | "dark" | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const theme = localStorage.getItem("theme");

			switch (theme) {
				case "light":
					setTheme("light");
					break;
				case "dark":
					setTheme("dark");
					break;
				default:
					setTheme(null);
					break;
			}
		} else {
			setTheme(null);
		}
	}, []);

	useEffect(() => {
		if (
			theme === "dark" ||
			((!("theme" in localStorage) || theme === null) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else if (theme === "light") {
			localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		} else {
			localStorage.removeItem("theme");
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	const useSystemTheme = () => {
		localStorage.removeItem("theme");
		setTheme(null);
	};

	return {
		toggleTheme,
		theme: theme || "system",
		useSystemTheme,
	};
};

export default useColorMode;
