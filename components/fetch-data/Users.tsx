import React, { useEffect, useState } from "react";

import axiosClient, { CanceledError } from "@/components/fetch-data/services/api-client";

import Loading from "./fragments/Loading";
import ListUsers from "./UsersList";
import { UserType, UserTypeDB } from "./UserForm";

const Users: React.FC = () => {
	const [users, setUsers] = useState<UserTypeDB[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		axiosClient
			.get<UserTypeDB[]>("/users", { signal: controller.signal })
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

	const deleteUser = (id: number) => {
		const originalUsersList = [...users];

		// Optimistic update Implementation
		setUsers(users.filter((user) => user.id !== id));

		axiosClient.delete(`/users/${id}`).catch((err) => {
			setError(err.message);
			setUsers(originalUsersList);
		});
	};

	const addOrEditUser = (userData: UserType) => {
		const prevUsers = [...users];

		if (userData.id) {
			// Modify an existing user

			setUsers(
				prevUsers.map((user) => (user.id !== userData.id ? user : (userData as UserTypeDB)))
			);

			axiosClient
				.patch<UserTypeDB>(`/users/${userData.id}`, userData)
				.then(({ data: updatedUser }) => {
					setUsers((prevUsers) =>
						prevUsers.map((user) => (user.id !== updatedUser.id ? user : updatedUser))
					);
				})
				.catch((err) => {
					setError(err.message);
					setUsers(prevUsers);
				});
		} else {
			// Add a new user

			const newIdTmp = prevUsers[prevUsers.length - 1].id + Math.random() * 10000;
			const userTmp = { ...userData, id: newIdTmp };

			setUsers([...prevUsers, userTmp]);

			axiosClient
				.post<UserTypeDB>("/users", userData)
				.then(({ data: savedUser }) => {
					setUsers((prevUsers) =>
						prevUsers.map((user) => (user.id !== newIdTmp ? user : savedUser))
					);
				})
				.catch((err) => {
					setError(err.message);
					setUsers(prevUsers);
				});
		}
	};

	return (
		<div>
			{users.length === 0 ? (
				<Loading />
			) : (
				<ListUsers
					handleDeleteUser={deleteUser}
					handleUserMutate={addOrEditUser}
					heading="Users list"
					users={users}
				/>
			)}

			{error && <p className="text-lg text-red-500 font-semibold">{error}</p>}
		</div>
	);
};

export default Users;
