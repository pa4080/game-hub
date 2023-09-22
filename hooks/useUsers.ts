import { useEffect, useState } from "react";

import userService from "@/services/user-service";
import { UserTypeDB } from "@/components/fetch-data/UserForm";
import { CanceledError } from "@/services/api-client";

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
