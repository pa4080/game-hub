import React from "react";

import { FaGithub } from "react-icons/fa";

import Image from "next/image";

import messages from "@/messages/en.json";
import { cn } from "@/lib/cn-utils";
import rawgLogo from "@/public/images/rawg-96x96.png";

interface Props {
	className?: string;
}

const Credits: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				"w-full flex flex-col justify-between items-center gap-4 px-1 py-1 text-xl",
				className
			)}
		>
			<a
				className="text-slate-500 w-full flex justify-center items-center line"
				href={process.env.NEXT_PUBLIC_RAWG_HOME}
				target="_blank"
			>
				<span className="text-base line-clamp-1 flex-shrink-0">{messages.Credits.poweredBy}</span>
				<Image
					alt="Rawg Logo"
					className="ml-2 dark:invert opacity-60 dark:opacity-40"
					height={20}
					src={rawgLogo}
					width={20}
				/>
			</a>

			<a
				className="text-slate-500 w-full flex justify-center items-center "
				href={process.env.NEXT_PUBLIC_PROJECT_REPO}
				target="_blank"
			>
				<span className="text-base line-clamp-1">{messages.Credits.projectAt}</span>
				<FaGithub className="ml-2" />
			</a>
		</div>
	);
};

export default Credits;
