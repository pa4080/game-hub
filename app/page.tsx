import React from "react";

import ToggleMode from "@/components/exercises/toggle-colors/ManualToggle";

const Home: React.FC = () => {
	return (
		<main className="p-8 flex overflow-x-auto">
			<ToggleMode />
		</main>
	);
};

export default Home;
