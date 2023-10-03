import React from "react";

import { cn } from "@/lib/cn-utils";
import ThemeSelectorLoader from "@/components/theme-selector/ThemeSelectorLoader";

import Nav_AsideSheet from "./Nav_AsideSheet";
import NavBar_Logo from "./NavBar_Logo";

interface Props {
	className: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("flex items-center justify-between w-full", className)}>
			<NavBar_Logo />

			<div className="flex items-center gap-5">
				<ThemeSelectorLoader />
				<Nav_AsideSheet />
			</div>
		</div>
	);
};

export default NavBar;
