"use client";

import React from "react";

import useColorMode from "@/hooks/exercises/useColorMode";

const ToggleMode: React.FC = () => {
	const { theme, toggleTheme } = useColorMode();

	return (
		<div>
			<div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
				<div>
					<button
						className="inline-flex items-center justify-center py-2 px-6 bg-indigo-500 rounded-md shadow-lg text-white font-semibold"
						onClick={toggleTheme}
					>
						{theme.toUpperCase()}
					</button>
				</div>
				<h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
					Writes Upside-Down
				</h3>
				<p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
					The Zero Gravity Pen can be used to write in any orientation, including upside-down. It
					even works in outer space.
				</p>
			</div>
		</div>
	);
};

export default ToggleMode;
