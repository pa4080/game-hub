import { Game } from "./rawg-endpoint-games-game";

export interface Games {
	count: number;
	next: string | null;
	previous: string | null;
	results: Game[];
	seo_title: string;
	seo_description: string;
	seo_keywords: string;
	seo_h1: string;
	noindex: boolean;
	nofollow: boolean;
	description: string;
	filters: {
		years: {
			from: number;
			to: number;
			filter: string;
			decade: number;
			years: {
				year: number;
				count: number;
				nofollow: boolean;
			}[];
			nofollow: boolean;
			count: number;
		}[];
	};
	nofollow_collections: string[];
}
