import React from "react";

import userService from "@/services/exercises/user-service";
import useUsers from "@/hooks/exercises/useUsers";

import Loading from "./fragments/Loading";
import ListUsers from "./UsersList";
import { UserType, UserTypeDB } from "./UserForm";

const Users: React.FC = () => {
	const { users, error, isLoading, setUsers, setError } = useUsers();

	const deleteUser = (id: number) => {
		const originalUsersList = [...users];

		setUsers(users.filter((user) => user.id !== id));

		userService.delete<UserTypeDB>(id).catch((err) => {
			setError(err.message);
			setUsers(originalUsersList);
		});
	};

	const userCreateOrUpdate = (userData: UserType) => {
		const prevUsers = [...users];

		if (userData.id) {
			// Update/modify an existing user

			setUsers(
				prevUsers.map((user) => (user.id !== userData.id ? user : (userData as UserTypeDB)))
			);

			userService
				.update<UserTypeDB>(userData as UserTypeDB)
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
			// Create/add a new user

			const newIdTmp = prevUsers[prevUsers.length - 1].id + Math.random() * 10000;
			const userTmp = { ...userData, id: newIdTmp };

			setUsers([...prevUsers, userTmp]);

			userService
				.create<UserTypeDB>(userData as UserTypeDB)
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
			{users.length === 0 || isLoading ? (
				<Loading />
			) : (
				<ListUsers
					handleDeleteUser={deleteUser}
					handleUserMutate={userCreateOrUpdate}
					heading="Users list"
					users={users}
				/>
			)}

			{error && <p className="text-lg text-red-500 font-semibold">{error}</p>}
		</div>
	);
};

export default Users;
