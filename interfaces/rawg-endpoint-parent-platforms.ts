import { Platform } from "./rawg-endpoint-platforms";

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
