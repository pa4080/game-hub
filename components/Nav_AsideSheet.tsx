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
	// SheetFooter,
	// SheetTitle,
	SheetHeader,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";

import Genres from "./Genres";
import Nav_Logo from "./Nav_Logo";

const Nav_AsideSheet: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					className="relative lg:hidden bg-slate-300 dark:bg-slate-800 hover:text-background transition-colors duration-300 dark:hover:bg-accent"
					name="Open mobile menu"
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
					<Genres externalAction={() => setIsOpen(false)} />
				</div>
				{/* <SheetFooter>
					<SheetClose asChild><Button type="submit">Close</Button></SheetClose>
				</SheetFooter> */}
			</SheetContent>
		</Sheet>
	);
};

export default Nav_AsideSheet;
