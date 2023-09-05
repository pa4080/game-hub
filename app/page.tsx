import React from "react";

import messages from "@/messages/en.json";

const Home: React.FC = () => {
	return (
		<main className="flex min-h-screen items-center justify-center">
			<h1>{messages.Home.helloWorld}</h1>
		</main>
	);
};

export default Home;
