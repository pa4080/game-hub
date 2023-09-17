import React from "react";

import messages from "@/messages/en.json";

interface Props {
	onSelectCategory: (category: string) => void;
}

const ExpenseFilter: React.FC<Props> = ({ onSelectCategory }) => {
	return (
		<select
			className="category_select"
			size={4}
			onChange={(event) => onSelectCategory && onSelectCategory(event.target.value)}
		>
			<option value="">{messages.Categories.all}</option>
			<option value={messages.Categories.groceries}>{messages.Categories.groceries}</option>
			<option value={messages.Categories.utilities}>{messages.Categories.utilities}</option>
			<option value={messages.Categories.entertainment}>{messages.Categories.entertainment}</option>
		</select>
	);
};

export default ExpenseFilter;
