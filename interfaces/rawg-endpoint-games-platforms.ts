export interface Platform {
	id: number;
	name: string;
	slug: string;
	image: string | null;
	year_end: number | null;
	year_start: number | null;
	games_count: number;
	image_background: string | null;
}

export interface ParentPlatform {
	id: number;
	name: string;
	slug: string;
}
