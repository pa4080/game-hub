export interface Platform {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string | null;
	image: string | null;
	year_start: number | null;
	year_end: number | null;
}

export interface Platforms {
	count: number;
	next: string;
	previous: string;
	results: Platform[];
}

export interface ParentPlatform {
	id: number;
	name: string;
	slug: string;
	platforms: Platform[];
}

export interface ParentPlatforms {
	count: number;
	results: ParentPlatform[];
}

export type ParentPlatformsObjArr = {
	platform: ParentPlatform;
}[];
