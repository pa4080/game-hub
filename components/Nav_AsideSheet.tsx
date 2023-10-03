import React from "react";
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
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					className="relative lg:hidden"
					name="Open mobile menu"
					size="icon"
					variant="outline"
				>
					<Menu className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			</SheetTrigger>

			<SheetContent className="flex flex-col pr-5 min-w-[280px]">
				<SheetHeader className="h-16">
					<Nav_Logo />
					{/* <SheetTitle>Game hub</SheetTitle> */}
					{/* <SheetDescription>Description...</SheetDescription> */}
				</SheetHeader>
				<div className="overflow-y-auto h-full flex-grow">
					<Genres />
				</div>
				{/* <SheetFooter>
					<SheetClose asChild><Button type="submit">Close</Button></SheetClose>
				</SheetFooter> */}
			</SheetContent>
		</Sheet>
	);
};

export default Nav_AsideSheet;
