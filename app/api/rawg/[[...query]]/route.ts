/**
 * @see https://github.com/pa4080/template-nextjs-13-app-router/blob/master/app/%5Blocale%5D/games/page.tsx
 * @see https://nextjs.org/docs/app/building-your-application/caching#data-cache
 */

import { NextRequest, NextResponse } from "next/server";

import { RawgResponse } from "@/interfaces/rawg";

interface Context {
	params: { query: string[] };
}

export async function fetchRawg(
	params: IterableIterator<[string, string]> | undefined,
	revalidate = 900 // revalidate every 15 minutes
) {
	const apiKey = process.env.RAWG_API_KEY;
	const apiUrl = process.env.RAWG_API_URL;
	const composeApiUrl = () => {
		let url = `${apiUrl}?key=${apiKey}`;

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest, { params }: Context) {
	const queryParam = request.nextUrl.searchParams.entries();

	try {
		switch (params?.query?.length ?? 0) {
			default: {
				return NextResponse.json(await fetchRawg(queryParam), { status: 200 });
			}
		}
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
