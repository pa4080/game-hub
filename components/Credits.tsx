import React from "react";

import { FaGithub } from "react-icons/fa";

import messages from "@/messages/en.json";
import { cn } from "@/lib/cn-utils";

interface Props {
	className?: string;
}

const Credits: React.FC<Props> = ({ className }) => {
	return (
		<a
			className={cn(
				"text-slate-500 w-full flex justify-center items-center text-xl px-1 py-2",
				className
			)}
			href={process.env.NEXT_PUBLIC_PROJECT_REPO}
			target="_blank"
		>
			<span className="text-base">{messages.Credits.reportBug}</span>
			<FaGithub className="ml-2" />
		</a>
	);
};

export default Credits;
