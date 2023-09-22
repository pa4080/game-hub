import { UserType, UserTypeDB } from "@/components/fetch-data/UserForm";

import apiClient from "./api-client";

class UserService {
	getAllUsers() {
		const controller = new AbortController();
		const request = apiClient.get<UserTypeDB[]>("/users", { signal: controller.signal });

		return { request, cancel: () => controller.abort() };
	}

	deleteUser(id: number) {
		return apiClient.delete<{}>(`/users/${id}`);
	}

	createUser(user: UserType) {
		return apiClient.post<UserTypeDB>("/users", user);
	}

	updateUser(user: UserType) {
		return apiClient.patch<UserTypeDB>(`/users/${user.id}`, user);
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
