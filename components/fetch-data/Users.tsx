import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

import Loading from "./fragments/Loading";
import ListUsers from "./UsersList";
import { AddUserType, UserType } from "./UserForm";

const dataUrl = "https://jsonplaceholder.typicode.com/users";

// The types are defined by the form schema
// export interface User {
// 	id: number;
// 	name: string;
// 	username: string;
// 	email: string;
// }
// export type NewUser = Omit<User, "id">;

const Users: React.FC = () => {
	const [users, setUsers] = useState<UserType[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		axios
			.get<UserType[]>(dataUrl, { signal: controller.signal })
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

	const handleAddNewUser = (newUser: AddUserType) => {
		const prevUsers = [...users];
		const newIdTmp = prevUsers[prevUsers.length - 1].id + Math.random() * 10000;
		const userTmp = { ...newUser, id: newIdTmp };

		setUsers([...prevUsers, userTmp]);

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

	const handleEditUser = (modifiedUser: UserType) => {
		const prevUsers = [...users];

		setUsers(prevUsers.map((user) => (user.id !== modifiedUser.id ? user : modifiedUser)));

		axios
			.patch(`${dataUrl}/${modifiedUser.id}`, modifiedUser)
			.then(({ data: updatedUser }) => {
				setUsers((prevUsers) =>
					prevUsers.map((user) => (user.id !== updatedUser.id ? user : updatedUser))
				);
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
					handleAddNewUser={handleAddNewUser}
					handleDeleteUser={handleUserDeleteById}
					handleEditUser={handleEditUser}
					heading="Users list"
					users={users}
				/>
			)}

			{error && <p className="text-lg text-red-500 font-semibold">{error}</p>}
		</div>
	);
};

export default Users;
