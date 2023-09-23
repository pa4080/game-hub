import React from "react";
// import { Analytics } from "@vercel/analytics/react";

import { Inter as DefaultFont } from "next/font/google";

import "@/app/globals.css";

import manifest from "@/public/manifest.json";

import { AppContextProvider } from "@/contexts/AppContext";

import { ThemeProvider } from "./_theme-provider";

import type { Metadata } from "next";

const font = DefaultFont({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: manifest.name,
	description: manifest.description,
	manifest: "/manifest.json",
	viewport: "width=device-width, initial-scale=1",
	robots: "index,follow",
	keywords: manifest.keywords,
	themeColor: manifest.theme_color,
	publisher: manifest.author,
	creator: manifest.author,
	colorScheme: "light",
};

interface Props {
	children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
	return (
		<html suppressHydrationWarning lang="en">
			<body className={font.className}>
				<AppContextProvider>
					<ThemeProvider
						disableTransitionOnChange
						enableSystem
						attribute="class"
						defaultTheme="system"
					>
						{children}
					</ThemeProvider>
				</AppContextProvider>
				{/* <Analytics /> */}
			</body>
		</html>
	);
};

export default RootLayout;
