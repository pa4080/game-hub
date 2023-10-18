import React from "react";
// import { Analytics } from "@vercel/analytics/react";

import { Inter as DefaultFont } from "next/font/google";

import "./globals.css";

import Image from "next/image";

import Link from "next/link";

import manifest from "@/public/manifest.json";

import { AppContextProvider } from "@/contexts/AppContext";

import logo from "@/public/favicon.svg";

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
		<html lang="en">
			<body className={font.className}>
				<div className="absolute right-8 top-8 drop-shadow-lg">
					<Link href="/">
						<Image
							alt="Back to home"
							className="drop-shadow-xl"
							height={64}
							src={logo}
							width={64}
						/>
					</Link>
				</div>
				<AppContextProvider>{children}</AppContextProvider>
				{/* <Analytics /> */}
			</body>
		</html>
	);
};

export default RootLayout;
