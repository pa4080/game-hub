const getImageUrl = (url: string | undefined, cropped = true) => {
	if (!url) {
		return "";
	}

	// If we are on production, where the images optimization is disabled
	// we proxy the images via the Next.js server and cache them...
	// @see: @/app/api/media/[...endpoint]/route.ts
	const prefix = process.env.NEXT_PUBLIC_ENV === "production" ? "/api/media/" : "";

	if (cropped) {
		const divider = "media/";
		const cropQuery = "crop/600/400/";
		const urlArr = url?.split(divider);

		return prefix + urlArr[0] + divider + cropQuery + urlArr[1];
	}

	return prefix + url;
};

export default getImageUrl;
