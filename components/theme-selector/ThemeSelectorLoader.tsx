import dynamic from "next/dynamic";
import { cookies } from "next/headers";

import { SunMoon } from "lucide-react";

import { ThemeType } from "./ThemeSelector";

const ThemeSelector = dynamic(() => import("./ThemeSelector"), {
	ssr: false,
	loading: () => (
		<div className="btn_ui_div relative w-10 h-10 max-h-full">
			<SunMoon />
		</div>
	),
});

const ThemeSelectorLoader = () => {
	const theme = cookies().get("x-theme")?.value as ThemeType;

	return <ThemeSelector theme={theme} />;
};

export default ThemeSelectorLoader;
