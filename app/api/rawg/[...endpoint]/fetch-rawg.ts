import { RawgResponse } from "@/interfaces/rawg";

import { RawgEndpoints } from "./rawg-endpoints";

export async function fetchRawg(
	params: IterableIterator<[string, string]> | undefined,
	endpoint: RawgEndpoints,
	revalidate = 900 // revalidate every 15 minutes
) {
	const apiKey = process.env.RAWG_API_KEY;
	const apiUrl = process.env.RAWG_API_URL;
	const composeApiUrl = () => {
		let url = `${apiUrl}/${endpoint}?key=${apiKey}`;

		if (params) {
			const paramsArray = Array.from(params);

			url += `&${paramsArray
				.map((param) => (param[0] === "key" ? null : `${param[0]}=${param[1]}`))
				.filter((param) => !!param)
				.join("&")}`;
		}

		return url;
	};

	const response = await fetch(composeApiUrl(), { next: { revalidate } });
	const gamesData: RawgResponse = await response.json();

	return {
		...gamesData,
		next: gamesData.next?.replace(apiKey as string, "API_KEY"),
		previous: gamesData.previous?.replace(apiKey as string, "API_KEY"),
	};
}
