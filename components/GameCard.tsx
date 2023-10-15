import React, { MouseEvent, useRef, useState } from "react";

import Image from "next/image";

import { Game } from "@/interfaces/rawg-endpoint-games-game";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/cn-utils";

import imgPlaceholder from "@/public/images/no-signal.jpg";

import getCroppedImageUrl from "@/lib/get-rawg-cropped-image-url";

import GameCard_Platforms from "./GameCard_Platforms";
import GameCard_Score from "./GameCard_Score";
import GameCard_Rating from "./GameCard_Rating";
import GameCard_ExtraInfo from "./GameCard_ExtraInfo";

interface Props {
	game: Game;
	className?: string;
	priority?: boolean;
}

const GameCard: React.FC<Props> = ({ game, className, priority = false }) => {
	// console.log(game);
	const [pullScreenshots, setPullScreenshots] = useState(false);
	const [mouseX, setMouseX] = useState(0); // percent of the card width

	const cardRef = useRef<HTMLDivElement>(null);
	const screenShotRefs = useRef<(HTMLImageElement | null)[]>([]);

	const handleMouseEnter = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		e.preventDefault();

		setPullScreenshots(true);

		if (cardRef.current) {
			const memoHeight = `${cardRef.current.clientHeight}px`;
			const cardRefCurrent = cardRef.current;

			setTimeout(() => {
				cardRefCurrent.style.height = memoHeight;
				cardRefCurrent.style.zIndex = "1000";

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

	const indicatorFactory = (
		item: Game["short_screenshots"][number],
		index: number,
		arr: Game["short_screenshots"]
	) => {
		const widthPercent = 98;
		const sectorsLength = widthPercent / arr.length;
		const activeSector = Math.round(index * sectorsLength);
		const isActive =
			mouseX > 100 - widthPercent - 1 &&
			mouseX < widthPercent + 1 &&
			activeSector <= mouseX &&
			mouseX < activeSector + sectorsLength;

		if (isActive) {
			screenShotRefs.current[index]?.classList.add("active");
		} else {
			screenShotRefs.current[index]?.classList.remove("active");
		}

		return (
			<div
				key={index}
				className={cn("game_card_indicator_item", isActive ? "bg-gray-400" : "bg-gray-400/50")}
				data-id={item.id}
				style={{
					width: `${98 / arr.length}%`,
				}}
			></div>
		);
	};

	const screenshotHoverFactory = (item: Game["short_screenshots"][number], index: number) => {
		return (
			<Image
				key={index}
				ref={(el) => (screenShotRefs.current[index] = el)}
				alt={`${game.name}: ${item.id}`}
				className="game_card_image"
				height={180}
				src={item?.image ? item.image : imgPlaceholder}
				unoptimized={process.env.NEXT_PUBLIC_ENV === "production"}
				width={320}
			/>
		);
	};

	return (
		<div
			ref={cardRef}
			className={cn("game_card  game_card_bg", className)}
			style={{ zIndex: 0 }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* <div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg"> */}
			<div
				className="relative w-full rounded-t-2xl overflow-hidden"
				onMouseMove={getMouse_X_Position_WithinTheCard}
			>
				<AspectRatio ratio={16 / 9}>
					<Image
						alt={game.name}
						className="game_card_image z-10"
						height={180}
						priority={priority}
						src={game.background_image ? getCroppedImageUrl(game.background_image) : imgPlaceholder}
						// https://vercel.com/docs/image-optimization/limits-and-pricing#hobby
						unoptimized={process.env.NEXT_PUBLIC_ENV === "production"}
						width={320}
					/>

					{pullScreenshots &&
						game.short_screenshots &&
						game.short_screenshots.map((item, index) => screenshotHoverFactory(item, index))}
				</AspectRatio>

				{game.short_screenshots && (
					<div className="game_card_indicator_container">
						{game.short_screenshots.map((item, index, arr) => indicatorFactory(item, index, arr))}
					</div>
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
