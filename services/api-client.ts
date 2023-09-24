import axios, { CanceledError, AxiosResponse } from "axios";

import { Route } from "@/routes";

export default axios.create({
	baseURL: Route.api.rawg,
	timeout: 5000,
	params: {
		key: "API_KEY",
	},
	headers: {
		"Content-Type": "application/json",
	},
});

export { CanceledError };
export type { AxiosResponse };
