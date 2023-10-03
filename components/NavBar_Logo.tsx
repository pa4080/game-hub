import React from "react";
import Image from "next/image";

import messages from "@/messages/en.json";
import logo from "@/public/favicon.svg";
import { cn } from "@/lib/cn-utils";

interface Props {
	className?: string;
}

const NavBar_Logo: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("flex items-center justify-start gap-2", className)}>
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
			<div>{messages.Home.title.substring(1)}</div>
		</div>
	);
};

export default NavBar_Logo;
