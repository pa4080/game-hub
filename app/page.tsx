import React from "react";

import NavBar from "@/components/NavBar";
import GameGrid from "@/components/GameGrid";

/**
 * Refs. about the grid layout
 * @see https://tailwindcss.com/docs/grid-template-columns
 * @see https://refine.dev/blog/tailwind-grid/
 * @see https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns
 */
const Home: React.FC = () => {
	return (
		// Most of these should be moved in the ./layout.tsx
		<main className="container p-0 grid grid-cols-1 sm:grid-cols-[200px_1fr]">
			<div className="sm:col-span-2">
				<NavBar className="p-2" />
			</div>

			<div className="p-2 bg-blue-500 hidden sm:block">aside</div>
			<div className="bg-green-500">
				<GameGrid className="p-2" />
			</div>
		</main>
	);
};

export default Home;
