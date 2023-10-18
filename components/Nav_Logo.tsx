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
		<a href="/">
			<div
				className={cn("flex items-center justify-start gap-1 drop-shadow-xl text-3xl", className)}
			>
				<div className="inline-flex items-center justify-center rounded-md border-input h-11 w-11 flex-shrink-0">
					<Image
						priority
						alt={messages.NavBar.logoDesc}
						className="h-11 w-11 drop-shadow-xl"
						height={44}
						src={logo}
						width={44}
					/>
				</div>
				<div className="font-unicephalon text-accent tracking-wider translate-y-[0.2rem] text-left line-clamp-1">
					{messages.Home.title.substring(1)}
				</div>
			</div>
		</a>
	);
};

export default Nav_Logo;
