const getCroppedImageUrl = (url: string) => {
	const divider = "media/";
	const cropQuery = "crop/600/400/";
	const urlArr = url.split(divider);

	return urlArr[0] + divider + cropQuery + urlArr[1];
};

export default getCroppedImageUrl;
