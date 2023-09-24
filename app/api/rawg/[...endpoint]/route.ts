/**
 * @see https://github.com/pa4080/template-nextjs-13-app-router/blob/master/app/%5Blocale%5D/games/page.tsx
 * @see https://nextjs.org/docs/app/building-your-application/caching#data-cache
 */

import { NextRequest, NextResponse } from "next/server";

import { RawgEndpoints, RawgEndpointsType } from "@/interfaces/rawg-endpoints";

import { fetchRawg } from "./fetch-rawg";

interface Context {
	params: { endpoint: string[] };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest, { params }: Context) {
	const queryParam = request.nextUrl.searchParams.entries();

	try {
		switch (params?.endpoint?.length ?? 0) {
			case 1: {
				const endpoint = params?.endpoint[0] as RawgEndpointsType;
				const endpoints = [...Object.values(RawgEndpoints)] as [string];

				if (endpoints.includes(endpoint as string)) {
					return NextResponse.json(await fetchRawg(queryParam, endpoint), { status: 200 });
				} else {
					return NextResponse.json(
						{ message: `The valid endpoints are: ${endpoints.join(", ")}.` },
						{ status: 404 }
					);
				}
			}

			default: {
				return NextResponse.json(
					{ message: "RAWG API endpoint is required, see: https://api.rawg.io/docs/." },
					{ status: 501 }
				);
			}
		}
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
