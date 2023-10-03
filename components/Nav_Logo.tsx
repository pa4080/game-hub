import React from "react";
import Image from "next/image";

import messages from "@/messages/en.json";
import logo from "@/public/favicon.svg";
import { cn } from "@/lib/cn-utils";

interface Props {
	className?: string;
}

const Nav_Logo: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("flex items-center justify-start gap-1", className)}>
			<div className="inline-flex items-center justify-center rounded-md border-input h-11 w-11 drop-shadow-xl">
				<Image
					priority
					alt={messages.NavBar.logoDesc}
					className="w-auto h-auto drop-shadow-xl"
					height={36}
					src={logo}
					width={36}
				/>
			</div>
			<div className="font-unicephalon text-accent text-2xl 5xs:text-3xl tracking-wider translate-y-[0.2rem] text-left line-clamp-1">
				{messages.Home.title.substring(1)}
			</div>
		</div>
	);
};

export default Nav_Logo;
