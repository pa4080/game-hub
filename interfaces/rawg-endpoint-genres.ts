import { Genre } from "./rawg-endpoint-genres-genre";

export interface Genres {
	count: number;
	next: string;
	previous: string;
	results: Genre[];
}
