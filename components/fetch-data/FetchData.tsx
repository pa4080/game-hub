import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

import Loading from "./Loading";
import ListGroup from "./ListUsers";

const dataUrl = "https://jsonplaceholder.typicode.com/users";

export interface User {
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
		const controller = new AbortController();

		axios
			.get<User[]>(dataUrl, { signal: controller.signal })
			.then(async (res) => {
				// Simulate slow network
				await new Promise((resolve) => setTimeout(resolve, 3000));
				setUsers(res.data);
			})
			.catch((err) => {
				if (err instanceof CanceledError) {
					return;
				}

				setError(err.message);
			});

		return () => {
			controller.abort();
		};
	}, []);

	const handleUserDeleteById = (id: number) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	return users.length === 0 ? (
		<Loading />
	) : (
		<ListGroup
			errorMessage={error}
			heading="Users list"
			users={users}
			onDelete={handleUserDeleteById}
		/>
	);
};

export default AxiosExample;
