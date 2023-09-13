import React, { useState } from "react";

interface Props {
	children: string;
	length: number;
}

const ShowMore: React.FC<Props> = ({ children, length }) => {
	const [showMore, setShowMore] = useState(false);

	if (children.length <= length) {
		return <p>{children}</p>;
	}

	return (
		<p>
			{showMore ? children : children.substring(0, length) + "..."}
			<button
				className="border text-sm rounded-sm ml-2 px-2 py-1 bg-gray-200 hover:bg-gray-300"
				role="button"
				onClick={() => setShowMore(!showMore)}
			>
				{showMore ? "Show Less" : "Show More"}
			</button>
		</p>
	);
};

export default ShowMore;
