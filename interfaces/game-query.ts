import { Genre } from "./rawg-endpoint-genres";
import { ParentPlatform } from "./rawg-endpoint-platforms";

export interface GameQuery {
	genre?: Genre | null;
	parentPlatform?: ParentPlatform | null;
	sortOrder?: string;
	search?: string;
}
