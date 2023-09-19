import React from "react";

import messages from "@/messages/en.json";
import { Skeleton } from "@/components/ui/skeleton";

const mockUsers = Array.from({ length: 6 }).map((_, index) => ({
	id: index,
	name: `User name for index ${index}`,
}));

const Loading: React.FC = () => {
	return (
		<div>
			<Skeleton className="text-3xl px-2 bg-gray-300 mr-36">&nbsp;</Skeleton>
			<ul className="m-2 border rounded-lg overflow-hidden">
				{mockUsers.map((user, index, arr) => (
					<li
						key={index}
						className={`px-4 py-2 pr-2 cursor-pointer transition-colors duration-200 flex gap-3 items-center justify-between w-full min-w-[20rem] ${
							index !== arr.length - 1 && "border-b"
						}`}
					>
						<Skeleton className={`bg-gray-200 text-transparent px-${4 + (index % 2)}`}>
							{user.name}
						</Skeleton>

						<Skeleton className="text-sm bg-gray-300 font-semibold hover:text-white py-1 px-3 border border-gray-300 hover:border-transparent rounded text-transparent">
							{messages.Buttons.btnDelete}
						</Skeleton>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Loading;
