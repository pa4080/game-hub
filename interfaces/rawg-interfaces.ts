import { Endpoints } from "./rawg-endpoints";
import { Games } from "./rawg-endpoint-games";
import { CreatorRoles } from "./rawg-endpoint-creator-roles";
import { Creators } from "./rawg-endpoint-creators";
import { Developers } from "./rawg-endpoint-developers";
import { Genres } from "./rawg-endpoint-genres";
import { Platforms, ParentPlatforms } from "./rawg-endpoint-platforms";
import { Publishers } from "./rawg-endpoint-publishers";
import { Stores } from "./rawg-endpoint-stores";
import { Tags } from "./rawg-endpoint-tags";

export interface Interfaces {
	[Endpoints.CREATOR_ROLES]: CreatorRoles;
	[Endpoints.CREATORS]: Creators;
	[Endpoints.DEVELOPERS]: Developers;
	[Endpoints.GAMES]: Games;
	[Endpoints.GENRES]: Genres;
	[Endpoints.PLATFORMS]: Platforms;
	[Endpoints.PLATFORMS_PARENTS]: ParentPlatforms;
	[Endpoints.PUBLISHERS]: Publishers;
	[Endpoints.STORES]: Stores;
	[Endpoints.TAGS]: Tags;
}
