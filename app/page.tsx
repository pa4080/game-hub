import React from "react";

import ThemeSelectorLoader from "@/components/ThemeSelectorLoader";

/**
 * Refs. about the grid layout
 * @see https://tailwindcss.com/docs/grid-template-columns
 * @see https://refine.dev/blog/tailwind-grid/
 * @see https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns
 */
const Home: React.FC = () => {
	return (
		<main className="container m-0 p-0 grid grid-cols-1 sm:grid-cols-[200px_1fr]">
			<div className="p-2 sm:col-span-2 bg-orange-300">
				<ThemeSelectorLoader />
			</div>
			<div className="p-2 bg-blue-500 hidden sm:block">aside</div>
			<div className="p-2 bg-green-500">content</div>
		</main>
	);
};

export default Home;
