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
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";

import Genres from "./Genres";

const NavAsideSheet: React.FC = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="relative lg:hidden" size="icon" variant="outline">
					<Menu className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					{/* <SheetTitle>Title</SheetTitle> */}
					{/* <SheetDescription>Description...</SheetDescription> */}
				</SheetHeader>
				<div className="">
					<Genres />
				</div>
				{/* <SheetFooter><SheetClose asChild><Button type="submit">Close</Button></SheetClose></SheetFooter> */}
			</SheetContent>
		</Sheet>
	);
};

export default NavAsideSheet;
