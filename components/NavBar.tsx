import React from "react";

import Image from "next/image";

import { cn } from "@/lib/cn-utils";

import messages from "@/messages/en.json";
import logo from "@/public/favicon.svg";
import ThemeSelectorLoader from "@/components/theme-selector/ThemeSelectorLoader";

interface Props {
	className: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("flex items-center justify-between w-full", className)}>
			<div className="flex items-center justify-between gap-3">
				<div className="inline-flex items-center justify-center rounded-md  border-input bg-background h-10 w-10">
					<Image
						priority
						alt={messages.NavBar.logoDesc}
						className="w-auto h-auto"
						height={32}
						src={logo}
						width={32}
					/>
				</div>
				<div>NavBar</div>
			</div>
			<ThemeSelectorLoader />
		</div>
	);
};

export default NavBar;
