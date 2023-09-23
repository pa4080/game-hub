import React from "react";

import NavBar from "@/components/NavBar";

/**
 * Refs. about the grid layout
 * @see https://tailwindcss.com/docs/grid-template-columns
 * @see https://refine.dev/blog/tailwind-grid/
 * @see https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns
 */
const Home: React.FC = () => {
	return (
		// Most of these should be moved in the ./layout.tsx
		<main className="container m-0 p-0 grid grid-cols-1 sm:grid-cols-[200px_1fr]">
			<NavBar className="p-2 sm:col-span-2" />

			<div className="p-2 bg-blue-500 hidden sm:block">aside</div>
			<div className="p-2 bg-green-500">content</div>
		</main>
	);
};

export default Home;
