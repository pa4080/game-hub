import { RawgEndpoints } from "./rawg-endpoints";
import { Games } from "./rawg-endpoint-games";
import { CreatorRoles } from "./rawg-endpoint-creator-roles";
import { Creators } from "./rawg-endpoint-creators";
import { Developers } from "./rawg-endpoint-developers";
import { Genres } from "./rawg-endpoint-genres";
import { Platforms } from "./rawg-endpoint-platforms";
import { Publishers } from "./rawg-endpoint-publishers";
import { Stores } from "./rawg-endpoint-stores";
import { Tags } from "./rawg-endpoint-tags";

export interface RawgInterfaces {
	[RawgEndpoints.CREATOR_ROLES]: CreatorRoles;
	[RawgEndpoints.CREATORS]: Creators;
	[RawgEndpoints.DEVELOPERS]: Developers;
	[RawgEndpoints.GAMES]: Games;
	[RawgEndpoints.GENRES]: Genres;
	[RawgEndpoints.PLATFORMS]: Platforms;
	[RawgEndpoints.PUBLISHERS]: Publishers;
	[RawgEndpoints.STORES]: Stores;
	[RawgEndpoints.TAGS]: Tags;
}
