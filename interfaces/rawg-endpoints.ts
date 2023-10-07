export enum Endpoints {
	CREATOR_ROLES = "creator-roles",
	CREATORS = "creators",
	DEVELOPERS = "developers",
	GAMES = "games",
	GENRES = "genres",
	PLATFORMS = "platforms",
	PLATFORMS_PARENTS = "platforms/lists/parents",
	PUBLISHERS = "publishers",
	STORES = "stores",
	TAGS = "tags",
}

export type EndpointsType = `${Endpoints}`;
