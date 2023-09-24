import { useEffect, useState } from "react";

import { CanceledError } from "@/services/exercises/api-client";

import userService from "@/services/exercises/user-service";
import { UserTypeDB } from "@/components/exercises/fetch-data/UserForm";

const useUsers = () => {
	const [users, setUsers] = useState<UserTypeDB[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const { request, cancel } = userService.getAll<UserTypeDB>();

		setIsLoading(true);

		request
			.then((res) => {
				setUsers(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) {
					return;
				}

				setError(err.message);
				setIsLoading(false);
			});

		return () => {
			cancel();
		};
	}, []);

	return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
