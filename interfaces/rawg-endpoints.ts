export enum RawgEndpoints {
	CREATOR_ROLES = "creator-roles",
	CREATORS = "creators",
	DEVELOPERS = "developers",
	GAMES = "games",
	GENRES = "genres",
	PLATFORMS = "platforms",
	PUBLISHERS = "publishers",
	STORES = "stores",
	TAGS = "tags",
}

export type RawgEndpointsType = `${RawgEndpoints}`;

/**
 * Previous version
 *
const RawgEndpoints = <const>[
	"creator-roles",
	"creators",
	"developers",
	"games",
	"genres",
	"platforms",
	"publishers",
	"stores",
	"tags",
];

export { RawgEndpoints };
export type RawgEndpointsType = (typeof RawgEndpoints)[number];
 */
