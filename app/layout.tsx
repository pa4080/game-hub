import React from "react";
// import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";

import "./globals.css";

import { inter, roboto_slab, unicephalon } from "@/app/fonts";
import manifest from "@/public/manifest.json";
import { AppContextProvider } from "@/contexts/AppContext";

import type { Metadata } from "next";

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
	icons: "/favicon.svg",
	metadataBase: new URL(manifest.homepage_url),
	openGraph: {
		title: manifest.name,
		description: manifest.description,
		url: manifest.homepage_url,
		siteName: manifest.short_name,
		type: "website",
		locale: "en_US",
		images: [
			{
				url: manifest.screenshots[0].src,
				width: 1644,
				height: 944,
				alt: manifest.name,
			},
		],
	},
};

/*
<meta property='og:title' content='Title of the article'/>
<meta property='og:image' content='//media.example.com/ 1234567.jpg'/>
<meta property='og:description' content='Description that will show in the preview'/>
<meta property='og:url' content='//www.example.com/URL of the article'/>
 */

interface Props {
	children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
	const switchTheme = () => {
		switch (cookies().get("x-theme")?.value) {
			case "light":
				return "light";

			case "dark":
				return "dark";

			default:
				return "system";
		}
	};

	return (
		<html suppressHydrationWarning className={switchTheme()} lang="en">
			<body
				className={
					`${inter.className} ${inter.variable} ` +
					`${roboto_slab.variable} ${unicephalon.variable} `
				}
			>
				<AppContextProvider>{children}</AppContextProvider>
				{/* <Analytics /> */}
			</body>
		</html>
	);
};

export default RootLayout;
