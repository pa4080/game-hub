import { useEffect, useMemo, useState } from "react";

import { CanceledError } from "@/services/api-client";

import gameService from "@/services/games-service";
import { RawgResponse } from "@/interfaces/rawg";

const useRawgGames = (searchParams?: [string, string][]) => {
	const [games, setGames] = useState<RawgResponse>();
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const getGamesBy = useMemo(
		() => (searchParams?: [string, string][]) => {
			const { request, cancel } = gameService.getAll<RawgResponse>(searchParams);

			setIsLoading(true);

			request
				.then((res) => {
					setGames(res.data);
					setIsLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) {
						return;
					}

					setError(err.message);
					setIsLoading(false);
				});

			return cancel;
		},
		[]
	);

	useEffect(() => {
		const cancel = getGamesBy(searchParams);

		return () => {
			cancel();
		};
	}, [getGamesBy, searchParams]);

	return { games, error, isLoading, getGamesBy };
};

export default useRawgGames;
