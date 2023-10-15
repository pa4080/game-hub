import React from "react";

import { cn } from "@/lib/cn-utils";
import { Game } from "@/interfaces/rawg-endpoint-games-game";
import { useAppContext } from "@/contexts/AppContext";

interface Props {
	game: Game;
	className?: string;
}

const GameCard_ExtraInfo: React.FC<Props> = ({ game, className }) => {
	const { genres, setGameQuery, messages } = useAppContext();

	const handleOnGenreClick = (genreSlug: string) => {
		const genre = genres?.results.find((genre) => genre.slug === genreSlug);

		setGameQuery((prev) => ({
			...prev,
			genre: genre,
		}));

		setTimeout(() => {
			window && window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		}, 100);
	};

	const formatDate = (date: string) => {
		const releasedDate = new Date(date);

		return releasedDate.toLocaleDateString("default", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
	};

	return (
		<div className={cn("game_card_extra_info", className)}>
			<div className="game_card_extra_info_row">
				<div>
					{messages.Common.releaseDate}: {formatDate(game.released)}
				</div>
			</div>

			<div className="game_card_extra_info_row">
				<div>{messages.RawgEndpoints.genres}:</div>
				<div className="w-full">
					{game.genres?.map((genre, index) => (
						<span key={index}>
							<span
								className="hover:underline cursor-pointer"
								onClick={() => handleOnGenreClick(genre.slug)}
							>
								{genre.name}
							</span>
							{index < game.genres.length - 1 ? ", " : ""}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default GameCard_ExtraInfo;
