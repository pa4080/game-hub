export interface Creators {
	count: number;
	next: string;
	previous: string;
	results: {
		id: number;
		name: string;
		slug: string;
		image: string;
		image_background: string;
		games_count: number;
	}[];
}
