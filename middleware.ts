/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	// GET /_next/data/build-id/hello.json

	// console.log(pathname);
	// with the flag this now /_next/data/build-id/hello.json
	// without the flag this would be normalized to /hello
}

export const config = {
	// Skip all paths that should not be internationalized
	matcher: ["/((?!api|_next|.*\\..*).*)"],
};
