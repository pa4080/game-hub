/**
 * @see https://github.com/pa4080/template-nextjs-13-app-router/blob/master/app/%5Blocale%5D/games/page.tsx
 * @see https://nextjs.org/docs/app/building-your-application/caching#data-cache
 */

import { NextRequest, NextResponse } from "next/server";

import { fetchRawg } from "./fetch-rawg";

interface Context {
	params: { query: string[] };
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
