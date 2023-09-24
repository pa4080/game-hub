import { RawgEndpoints } from "./rawg-endpoints";
import { Games } from "./rawg-games";
import { CreatorRoles } from "./rawg-creator-roles";

export interface RawgInterfaces {
	[RawgEndpoints.CREATOR_ROLES]: CreatorRoles;
	[RawgEndpoints.CREATORS]: Games;
	[RawgEndpoints.DEVELOPERS]: Games;
	[RawgEndpoints.GAMES]: Games;
	[RawgEndpoints.GENRES]: Games;
	[RawgEndpoints.PLATFORMS]: Games;
	[RawgEndpoints.PUBLISHERS]: Games;
	[RawgEndpoints.STORES]: Games;
	[RawgEndpoints.TAGS]: Games;
}

// export type RawgInterfaces = {
// 	[key in keyof RawgInterfacesMap]: RawgInterfacesMap[key];
// };

// export type RawgInterfaces = {
// 	[RawgEndpoints.CREATOR_ROLES]: CreatorRoles;
// 	[RawgEndpoints.CREATORS]: Games;
// 	[RawgEndpoints.DEVELOPERS]: Games;
// 	[RawgEndpoints.GAMES]: Games;
// 	[RawgEndpoints.GENRES]: Games;
// 	[RawgEndpoints.PLATFORMS]: Games;
// 	[RawgEndpoints.PUBLISHERS]: Games;
// 	[RawgEndpoints.STORES]: Games;
// 	[RawgEndpoints.TAGS]: Games;
// };

// export type RawgInterfaces<Type> = Type extends unknown ? Type : never;
