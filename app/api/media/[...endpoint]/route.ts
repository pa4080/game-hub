/**
 * @see: @/lib/get-rawg-cropped-image-url.ts
 * @see: @/components/GameCard.tsx
 */
import { NextRequest, NextResponse } from "next/server";

interface Context {
	params: { endpoint: string[] };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest, { params }: Context) {
	try {
		const url = params?.endpoint?.[0].match(/^http/)
			? params.endpoint.join("/").replace(":/", "://")
			: `${process.env.RAWG_MEDIA_URL}/${params.endpoint.join("/")}`;

		const response = await fetch(url, { cache: "force-cache" }); // { cache: "no-store" }
		const media = await response.blob();
		const fileType = params?.endpoint?.at(-1)?.split(".")?.[1];

		return new NextResponse(media, {
			headers: {
				"Content-Type": fileType ? `image/${fileType}` : "image",
			},
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
