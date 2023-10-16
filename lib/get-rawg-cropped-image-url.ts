const getCroppedImageUrl = (url: string) => {
	const divider = "media/";
	const cropQuery = "crop/600/400/";
	const urlArr = url?.split(divider);

	if (!urlArr) {
		return url;
	}

	// If we are on production, where the images optimization is disabled
	// we proxy the images via the Next.js server and cache them...
	// @see: @/app/api/media/[...endpoint]/route.ts
	const prefix = process.env.NEXT_PUBLIC_ENV === "production" ? "/api/media/" : "";

	return prefix + urlArr[0] + divider + cropQuery + urlArr[1];
	// return urlArr[0] + divider + cropQuery + urlArr[1];
};

export default getCroppedImageUrl;
