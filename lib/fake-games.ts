import { ParentPlatformsObjArr } from "@/interfaces/rawg-endpoint-platforms";

const mockPlatforms = [
	{
		platform: {
			id: 1,
			name: "PC",
			slug: "pc",
		},
	},
	{
		platform: {
			id: 2,
			name: "PlayStation",
			slug: "playstation",
		},
	},
	{
		platform: {
			id: 3,
			name: "Xbox",
			slug: "xbox",
		},
	},
	{
		platform: {
			id: 4,
			name: "Nintendo",
			slug: "nintendo",
		},
	},
	{
		platform: {
			id: 5,
			name: "Android",
			slug: "android",
		},
	},
	{
		platform: {
			id: 6,
			name: "iOS",
			slug: "ios",
		},
	},
	{
		platform: {
			id: 7,
			name: "Linux",
			slug: "linux",
		},
	},
	{
		platform: {
			id: 8,
			name: "Phone",
			slug: "phone",
		},
	},
	{
		platform: {
			id: 9,
			name: "Web",
			slug: "web",
		},
	},
] as ParentPlatformsObjArr;

const mockGames = Array.from({ length: 9 }).map((_, index) => ({
	id: index,
	name: `Game name for index ${index}`,
	platforms: mockPlatforms,
}));

export default mockGames;
