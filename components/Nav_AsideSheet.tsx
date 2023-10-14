"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
import {
	Sheet,
	// SheetClose,
	// SheetDescription,
	// SheetTitle,
	SheetFooter,
	SheetHeader,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";

import { useAppContext } from "@/contexts/AppContext";

import Genres from "./Genres";
import Nav_Logo from "./Nav_Logo";
import SortSelector from "./SortSelector";
import Credits from "./Credits";

const Nav_AsideSheet: React.FC = () => {
	const {
		messages: { Buttons: str },
	} = useAppContext();

	const [isOpen, setIsOpen] = useState(false);

	const closeSheet = () => {
		setTimeout(() => {
			setIsOpen(false);
		}, 1000);
	};

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					aria-label={str.mobileMenuName}
					className="btn_ui relative lg:hidden"
					name={str.mobileMenuName}
					size="icon"
					variant="outline"
				>
					<Menu className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			</SheetTrigger>

			<SheetContent className="flex flex-col pt-4 pr-5 min-w-[280px]">
				<SheetHeader className="h-16">
					<Nav_Logo />
					{/* <SheetTitle>Game hub</SheetTitle> */}
					{/* <SheetDescription>Description...</SheetDescription> */}
				</SheetHeader>
				<div className="overflow-y-auto h-full flex-grow">
					<Genres className="mr-4" externalAction={closeSheet} />
				</div>
				<SheetFooter className="-mb-5">
					<SortSelector
						className="text-lg"
						classNameTrigger="xs:w-full"
						externalAction={closeSheet}
					/>

					<Credits className="py-2" />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default Nav_AsideSheet;
