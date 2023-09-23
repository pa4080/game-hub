import dynamic from "next/dynamic";
import { cookies } from "next/headers";

import { ThemeType } from "./ThemeSelector";

const ThemeSelector = dynamic(() => import("./ThemeSelector"), {
	ssr: false,
});

const ThemeSelectorLoader = () => {
	const theme = cookies().get("x-theme")?.value as ThemeType;

	return <ThemeSelector theme={theme} />;
};

export default ThemeSelectorLoader;
