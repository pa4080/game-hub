import React, { MouseEvent, useRef, useState } from "react";

import { Game } from "@/interfaces/rawg-endpoint-games-game";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/cn-utils";

import { useAppContext } from "@/contexts/AppContext";
// import { useBreakpoint } from "@/hooks/useBreakpoint";

import { GalleryItem } from "@/interfaces/gallery-item";

import GameCard_Platforms from "./GameCard_Platforms";
import GameCard_Score from "./GameCard_Score";
import GameCard_Rating from "./GameCard_Rating";
import GameCard_ExtraInfo from "./GameCard_ExtraInfo";
import GameCard_Image from "./GameCard_Image";
import GameCard_Image_Indicator from "./GameCard_Image_Indicator";

interface Props {
	game: Game;
	className?: string;
}

const GameCard: React.FC<Props> = ({ game, className }) => {
	const { setGallery, setIsGalleryOpen } = useAppContext();

	const [pullScreenshots, setPullScreenshots] = useState(false);
	const [mouseX, setMouseX] = useState(0); // percent of the card width
	// const { isAboveSm } = useBreakpoint("sm");

	const cardRef = useRef<HTMLDivElement>(null);
	const screenShotRefs = useRef<(HTMLImageElement | null)[]>([]);

	const handleMouseEnter = () => {
		setPullScreenshots(true);

		if (cardRef.current) {
			const memoHeight = `${cardRef.current.clientHeight}px`;
			const cardRefCurrent = cardRef.current;

			setTimeout(() => {
				cardRefCurrent.style.height = memoHeight;
				cardRefCurrent.style.zIndex = "45";

				setTimeout(() => {
					cardRefCurrent.className += " game_card_scale_wrapper";
				}, 200);
			}, 10);
		}
	};

	const handleMouseLeave = () => {
		if (cardRef.current) {
			cardRef.current.style.height = "";
			cardRef.current.style.zIndex = "0";

			cardRef.current.className = cardRef.current.className
				.replace(/game_card_scale_wrapper/g, "")
				.replace(/ {2,}/g, " ");
		}
	};

	const getMouse_X_Position_WithinTheCard = (e: MouseEvent) => {
		if (cardRef.current) {
			let mouseX_Relative = Math.floor(
				(100 * (e.clientX - cardRef.current.offsetLeft)) / cardRef.current.clientWidth
			);

			if (mouseX_Relative > 100) {
				mouseX_Relative = 100;
			} else if (mouseX_Relative < 0) {
				mouseX_Relative = 0;
			}

			setMouseX(mouseX_Relative);
		}
	};

	const handleSetGallery = (game: Game) => {
		// if (game.background_image && isAboveSm) {
		if (game.background_image) {
			let gameImages: GalleryItem[];

			if (game.short_screenshots) {
				gameImages = game.short_screenshots;
			} else {
				gameImages = [{ id: game.id, image: game.background_image }];
			}

			setGallery(gameImages);
			setIsGalleryOpen(true);
		}
	};

	return (
		<div
			ref={cardRef}
			className={cn("game_card game_card_bg", className)}
			style={{ zIndex: 0 }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* <div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg"> */}
			<div
				className="relative w-full rounded-t-2xl overflow-hidden cursor-pointer"
				onClick={() => handleSetGallery(game)}
				onMouseMove={getMouse_X_Position_WithinTheCard}
			>
				<AspectRatio ratio={16 / 9}>
					<GameCard_Image
						className="game_card_image z-10"
						item={{
							id: game.id,
							image: game.background_image,
						}}
					/>

					{pullScreenshots &&
						game.short_screenshots &&
						game.short_screenshots.map((item, index) => (
							<GameCard_Image
								key={index}
								ref={(el) => (screenShotRefs.current[index] = el)}
								className="game_card_image"
								item={item}
							/>
						))}
				</AspectRatio>

				{game.short_screenshots && (
					<GameCard_Image_Indicator
						className="game_card_indicator_container"
						gallery={game.short_screenshots}
						imagesRefs={screenShotRefs}
						mouseX={mouseX}
					/>
				)}
			</div>
			{/* </div> */}
			<div className="game_card_info game_card_bg">
				<div className="flex justify-between items-center w-full">
					<GameCard_Platforms platforms={game.parent_platforms} />
					<div className="flex items-center gap-3">
						<GameCard_Rating rating={game.rating_top} />
						<GameCard_Score score={game.metacritic} />
					</div>
				</div>
				<h3 className="font-semibold text-xl">{game.name}</h3>
				<GameCard_ExtraInfo game={game} />
			</div>
		</div>
	);
};

export default GameCard;
