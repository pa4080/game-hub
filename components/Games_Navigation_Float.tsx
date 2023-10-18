import React, { useEffect, useState } from "react";

import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/cn-utils";

import Games_Navigation, { Games_Navigation_Props } from "./Games_Navigation";

interface Games_Navigation_Float_Props extends Games_Navigation_Props {
	upCb: () => void;
}

const Games_Navigation_Float: React.FC<Games_Navigation_Float_Props> = ({
	className,
	nextLink,
	nextCb,
	prevLink,
	prevName,
	prevCb,
	nextName,
	upCb,
}) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const showFloatNav = (e: Event) => {
			const scrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;

			scrollFromTop > 240 ? setShow(true) : setShow(false);
		};

		window.addEventListener("scroll", showFloatNav);

		return () => {
			window.removeEventListener("scroll", showFloatNav);
		};
	});

	return (
		<div
			className={cn(
				"sticky bottom-4 z-50 w-full flex items-center justify-center md:justify-end max-4xs:scale-90",
				className
			)}
		>
			<div
				className={cn(
					"xs:px-4 py-4 md:-mr-4 -mb-7 4xs:-mb-4 group transition-transform duration-500 w-fit 4xs:w-full xs:w-fit",
					show ? "translate-y-0" : "translate-y-24"
				)}
			>
				<div
					className={cn(
						"p-4 rounded-2xl flex gap-4 transition-all duration-150",
						"bg-slate-200 lg:bg-transparent lg:group-hover:bg-slate-200",
						"dark:bg-slate-900 lg:dark:bg-transparent lg:dark:group-hover:bg-slate-900",
						"shadow-md lg:shadow-none group-hover:shadow-md",
						"shadow-slate-300 group-hover:shadow-slate-300",
						"dark:shadow-slate-950 dark:group-hover:shadow-slate-950"
					)}
				>
					<Games_Navigation
						className="gap-4 xs:gap-4 sm:gap-4 lg:hidden lg:group-hover:flex"
						nextCb={nextCb}
						nextLink={nextLink}
						nextName={nextName}
						prevCb={prevCb}
						prevLink={prevLink}
						prevName={prevName}
						upCb={upCb}
					/>
					<div
						className="btn_ui_div bg-slate-300 hover:!bg-slate-500 dark:bg-slate-800 lg:dark:bg-slate-900 group-hover:dark:bg-slate-800 dark:hover:!bg-slate-700 lg:shadow-md shadow-slate-950 group-hover:shadow-none"
						onClick={upCb}
					>
						<ChevronUp />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Games_Navigation_Float;
