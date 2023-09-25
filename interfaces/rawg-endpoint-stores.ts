export interface Stores {
	count: number;
	next: string;
	previous: string;
	results: {
		id: number;
		name: string;
		domain: string;
		slug: string;
		games_count: number;
		image_background: string;
	}[];
}
