import React from "react";

import ThemeSelectorLoader from "@/components/ThemeSelectorLoader";

const Home: React.FC = () => {
	return (
		<main className="p-8 flex overflow-x-auto">
			<ThemeSelectorLoader />
		</main>
	);
};

export default Home;
