import React from "react";

import Image from "next/image";

import { cn } from "@/lib/cn-utils";
import messages from "@/messages/en.json";
import logo from "@/public/favicon.svg";
import ThemeSelectorLoader from "@/components/theme-selector/ThemeSelectorLoader";

import NavAsideSheet from "./NavAsideSheet";

interface Props {
	className: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("flex items-center justify-between w-full", className)}>
			<div className="flex items-center justify-between gap-3">
				<div className="inline-flex items-center justify-center rounded-md border-input h-10 w-10 drop-shadow-xl">
					<Image
						priority
						alt={messages.NavBar.logoDesc}
						className="w-auto h-auto drop-shadow-xl"
						height={32}
						src={logo}
						width={32}
					/>
				</div>
			</div>
			<div className="flex items-center gap-5">
				<ThemeSelectorLoader />
				<NavAsideSheet />
			</div>
		</div>
	);
};

export default NavBar;
