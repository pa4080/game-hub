import React from "react";

import { Skeleton } from "../ui/skeleton";

const mockUsers = Array.from({ length: 6 }).map((_, index) => ({
	id: index,
	name: `User ${index}`,
}));

const Loading: React.FC = () => {
	return (
		<div>
			<Skeleton className="text-lg font-semibold w-[12rem] mb-1 bg-gray-400">&nbsp;</Skeleton>

			<Skeleton className="ml-5">
				{mockUsers.map((user) => (
					<Skeleton key={user.id} className="w-[16rem] mb-1 bg-gray-200">
						&nbsp;
					</Skeleton>
				))}
			</Skeleton>
		</div>
	);
};

export default Loading;
