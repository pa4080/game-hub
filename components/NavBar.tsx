import React from "react";

import { cn } from "@/lib/cn-utils";
import ThemeSelectorLoader from "@/components/theme-selector/ThemeSelectorLoader";

import Nav_AsideSheet from "./Nav_AsideSheet";
import Nav_Logo from "./Nav_Logo";
import SearchInput from "./SearchInput";

interface Props {
	className: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("flex flex-col w-full items-center gap-5", className)}>
			<div className="flex items-center justify-between w-full gap-5">
				<Nav_Logo className="text-3xl xa:text-2xl md:text-3xl xs:flex-shrink-0" />

				<SearchInput className="hidden xa:block" />

				<div className="flex items-center justify-end gap-5 min-w-[100px] lg:min-w-[40px]">
					<ThemeSelectorLoader />
					<Nav_AsideSheet />
				</div>
			</div>
			<SearchInput className="xa:hidden w-full" />
		</div>
	);
};

export default NavBar;
