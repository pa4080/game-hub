const rawgEndpoints = <const>[
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

export type RawgEndpoints = (typeof rawgEndpoints)[number];

export { rawgEndpoints };
