import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

import Loading from "./Loading";
import ListUsers from "./ListUsers";
import { AddUserFormData } from "./AddUserForm";

const dataUrl = "https://jsonplaceholder.typicode.com/users";

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
}
// NewUser is defined via the form schema
// export type NewUser = Omit<User, "id">;

const Users: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		axios
			.get<User[]>(dataUrl, { signal: controller.signal })
			.then(async (res) => {
				// Simulate slow network
				await new Promise((resolve) => setTimeout(resolve, 1000));
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
		const originalUsersList = [...users];

		// Optimistic update Implementation
		setUsers(users.filter((user) => user.id !== id));

		axios.delete(`${dataUrl}/${id}`).catch((err) => {
			setError(err.message);
			setUsers(originalUsersList);
		});
	};

	const handleAddNewUser = (newUser: AddUserFormData) => {
		const prevUsers = [...users];
		const newIdTmp = prevUsers[prevUsers.length - 1].id + Math.random() * 10000;
		const prevUsersTmp = { ...newUser, id: newIdTmp };

		setUsers([...prevUsers, prevUsersTmp]);

		axios
			.post(dataUrl, newUser)
			.then(({ data: savedUser }) => {
				setUsers((prevUsers) => prevUsers.map((user) => (user.id !== newIdTmp ? user : savedUser)));
			})
			.catch((err) => {
				setError(err.message);
				setUsers(prevUsers);
			});
	};

	return (
		<div>
			{users.length === 0 ? (
				<Loading />
			) : (
				<ListUsers
					heading="Users list"
					users={users}
					onAddNew={handleAddNewUser}
					onDelete={handleUserDeleteById}
				/>
			)}

			{error && <p className="text-lg text-red-500 font-semibold">{error}</p>}
		</div>
	);
};

export default Users;
