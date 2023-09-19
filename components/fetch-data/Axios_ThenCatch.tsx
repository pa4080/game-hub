import React, { useEffect, useState } from "react";
import axios from "axios";

const dataUrl = "https://jsonplaceholder.typicode.com/users";

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
}

const AxiosExample: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.get<User[]>(dataUrl)
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	return (
		<div>
			{error ? (
				<p className="text-lg text-red-500 font-semibold">{error}</p>
			) : (
				<h1 className="text-lg font-semibold">Users list:</h1>
			)}
			<ul className="ml-5">
				{users.map((user) => (
					<li key={user.id} className="list-decimal">
						{user.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default AxiosExample;
