import React, { MouseEvent, useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/cn-utils";
import { useAppContext } from "@/contexts/AppContext";

import { GalleryItem } from "@/interfaces/gallery-item";

import GameCard_Image from "./GameCard_Image";
import { Button } from "./ui/button";
import GameCard_Image_Indicator from "./GameCard_Image_Indicator";

interface Props {
	className?: string;
}

const GameGallery: React.FC<Props> = ({ className }) => {
	const {
		messages: { Buttons: str },
		gallery,
		isGalleryOpen,
		setIsGalleryOpen,
	} = useAppContext();

	const setActiveSector = (index: number, arr: GalleryItem[], offset = 10) => {
		const widthPercent = 98;
		const sectorsLength = widthPercent / arr.length;

		return Math.round(index * sectorsLength) + offset;
	};

	const [mouseX, setMouseX] = useState(0); // percent of the card width
	const containerRef = useRef<HTMLDivElement>(null);
	const imagesRefs = useRef<(HTMLImageElement | null)[]>([]);

	useEffect(() => {
		if (gallery) {
			setMouseX(setActiveSector(0, gallery));
		}
	}, [gallery]);

	const getMouse_X_Position_WithinTheCard = (e: MouseEvent) => {
		if (containerRef.current) {
			/**
			 * Because of the complex positioning of the <DialogContent /> component,
			 * we need to get 50% of its size of the and subtract it from its left offset,
			 * which is 50% of the screen width. 24 is the size of its (current) padding.
			 * Thus we get the left offset of the element where the function
			 * "getMouse_X_Position_WithinTheCard()" is called.
			 */
			const leftOffset = containerRef.current.offsetLeft - containerRef.current.offsetWidth / 2;

			let mouseX_Relative = Math.floor(
				(100 * (e.clientX - leftOffset - 24)) / containerRef.current.clientWidth
			);

			if (mouseX_Relative > 100) {
				mouseX_Relative = 100;
			} else if (mouseX_Relative < 0) {
				mouseX_Relative = 0;
			}

			setMouseX(mouseX_Relative);
		}
	};

	const displayNext = () => {
		if (imagesRefs.current && imagesRefs.current.length > 1) {
			const currentActive = imagesRefs.current.findIndex((el) => el?.classList.contains("active"));

			if (currentActive < imagesRefs.current.length - 1) {
				setMouseX(setActiveSector(currentActive + 1, gallery!));
				imagesRefs.current[currentActive + 1]?.classList.add("active");
				imagesRefs.current[currentActive]?.classList.remove("active");
			} else {
				setMouseX(setActiveSector(0, gallery!));
				imagesRefs.current[0]?.classList.add("active");
				imagesRefs.current[currentActive]?.classList.remove("active");
			}
		}
	};

	const displayPrev = () => {
		if (imagesRefs.current && imagesRefs.current.length > 1) {
			const currentActive = imagesRefs.current.findIndex((el) => el?.classList.contains("active"));

			if (currentActive > 0) {
				setMouseX(setActiveSector(currentActive - 1, gallery!));
				imagesRefs.current[currentActive - 1]?.classList.add("active");
				imagesRefs.current[currentActive]?.classList.remove("active");
			} else {
				setMouseX(setActiveSector(imagesRefs.current.length - 1, gallery!));
				imagesRefs.current[imagesRefs.current.length - 1]?.classList.add("active");
				imagesRefs.current[currentActive]?.classList.remove("active");
			}
		}
	};

	return (
		<Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
			<DialogContent ref={containerRef} className="flex flex-col justify-between">
				<div
					className={cn(
						"flex flex-row-reverse items-center",
						"gap-4 mt-14 xs:mt-0",
						"justify-between",
						"w-full xs:w-fit",
						className
					)}
				>
					<Button
						className="btn_next_prev pl-4 pr-2"
						// disabled={!nextLink}
						name={str.next}
						onClick={displayNext}
					>
						<span>{str.next}</span>
						<ChevronRight />
					</Button>

					<Button
						className="btn_next_prev pl-2 pr-4"
						// disabled={!prevLink}
						name={str.prev}
						onClick={displayPrev}
					>
						<ChevronLeft />
						<span>{str.prev}</span>
					</Button>
				</div>

				<div className="gallery_container w-full h-fit">
					<div
						className="w-full h-fit overflow-hidden relative flex-grow rounded-xl drop-shadow-md"
						onMouseMove={getMouse_X_Position_WithinTheCard}
					>
						<AspectRatio ratio={16 / 9}>
							{gallery &&
								gallery?.length > 0 &&
								gallery?.map((item, index) => (
									<GameCard_Image
										key={index}
										ref={(el) => (imagesRefs.current[index] = el)}
										className={cn("game_card_image", index === 0 && "active")}
										cropped={false}
										item={item}
										priority={index === 0}
										resolution={[1920, 1080]}
									/>
								))}
						</AspectRatio>
					</div>
				</div>

				<GameCard_Image_Indicator
					className="w-full pb-1 gap-2 justify-evenly items-center flex"
					gallery={gallery}
					imagesRefs={imagesRefs}
					mouseX={mouseX}
				/>
			</DialogContent>
		</Dialog>
	);
};

export default GameGallery;
