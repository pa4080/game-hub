import React from "react";

import { FaWindows, FaPlaystation, FaXbox, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiAtari, SiCommodore, SiSega } from "react-icons/si";
import { BsGlobe, BsJoystick } from "react-icons/bs";
import { RiAppleFill, RiAppleLine } from "react-icons/ri";
import { CgShapeRhombus } from "react-icons/cg";
import { PiGameControllerFill, PiGameControllerDuotone } from "react-icons/pi";

import messages from "@/messages/en.json";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/cn-utils";
import useRawgApi from "@/hooks/useRawgApi";
import { Interfaces } from "@/interfaces/rawg-interfaces";
import { Endpoints } from "@/interfaces/rawg-endpoints";
import { useAppContext } from "@/contexts/AppContext";

export const platformsIconStyle = "w-5 h-5";

export const Platforms_IconsMap: { [key: string]: React.ReactNode } = {
	pc: <FaWindows className={platformsIconStyle} />,
	playstation: <FaPlaystation className={platformsIconStyle} />,
	xbox: <FaXbox className={platformsIconStyle} />,
	nintendo: <SiNintendo className={platformsIconStyle} />,
	android: <FaAndroid className={platformsIconStyle} />,
	ios: <RiAppleFill className={platformsIconStyle} />,
	mac: <RiAppleLine className={platformsIconStyle} />,
	linux: <FaLinux className={platformsIconStyle} />,
	phone: <MdPhoneIphone className={platformsIconStyle} />,
	web: <BsGlobe className={platformsIconStyle} />,
	atari: <SiAtari className={platformsIconStyle} />,
	"commodore-amiga": <SiCommodore className={platformsIconStyle} />,
	sega: <SiSega className={platformsIconStyle} />,
	"3do": <CgShapeRhombus className={platformsIconStyle} />,
	"neo-geo": <BsJoystick className={platformsIconStyle} />,
	"show-all": <PiGameControllerFill className={platformsIconStyle} />,
	"not-defined": <PiGameControllerDuotone className={platformsIconStyle} />,
};

interface Props {
	className?: string;
	classNameTrigger?: string;
	classNameContent?: string;
}

const PlatformSelector: React.FC<Props> = ({ className, classNameTrigger, classNameContent }) => {
	const { setGameQuery } = useAppContext();
	const { data: platforms, error } = useRawgApi<Interfaces[Endpoints.PLATFORMS_PARENTS]>(
		Endpoints.PLATFORMS_PARENTS
	);

	if (error) {
		return null;
	}

	const handleOnChange = (e: React.FormEvent<HTMLFormElement>) => {
		// e.stopPropagation();
		// e.nativeEvent.stopImmediatePropagation();
		// e.preventDefault();

		setGameQuery((prev) => ({
			...prev,
			parentPlatform:
				platforms?.results.find((platform) => platform.slug === e.currentTarget?.platform.value) ??
				null,
		}));
	};

	return (
		<form action="submit" className={cn("w-full", className)} onChange={handleOnChange}>
			<Select name="platform">
				<SelectTrigger
					aria-label={messages.Platforms.select}
					className={cn("selector_trigger", "w-full xs:w-[262px] sm:w-[280px]", classNameTrigger)}
					name={messages.Platforms.select}
				>
					<SelectValue placeholder={messages.Platforms.select} />
				</SelectTrigger>
				<SelectContent className={cn("p-2", classNameContent)}>
					<SelectGroup>
						<SelectItem value="show-all">
							<div className="select_item_inner">
								<div className="flex">{Platforms_IconsMap["show-all"]}</div>
								<span>{messages.Platforms.showAll}</span>
							</div>
						</SelectItem>

						<SelectLabel>{messages.Platforms.available}</SelectLabel>

						{platforms?.results.map((platform) => (
							<SelectItem key={platform.slug} value={platform.slug}>
								<div className="select_item_inner">
									<div className="flex">
										{
											Platforms_IconsMap[
												Object.keys(Platforms_IconsMap).includes(platform.slug)
													? platform.slug
													: "not-defined"
											]
										}
									</div>
									<span className="line-clamp-1 flex-shrink-0">{platform.name}</span>
								</div>
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</form>
	);
};

export default PlatformSelector;
