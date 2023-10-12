import { SearchParamsType } from "@/hooks/useRawgApi";

import apiClient, { AxiosResponse } from "./api-client";

class HttpService {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll<T>(searchParams?: SearchParamsType): {
		request: Promise<AxiosResponse<T, unknown>>;
		cancel: () => void;
	} {
		const controller = new AbortController();
		const signal = controller.signal;
		const params: { [key: string]: string } = {};

		if (searchParams instanceof Array) {
			searchParams.forEach((param) => {
				params[param[0]] = param[1];
			});
		} else if (searchParams instanceof Object && searchParams.hasOwnProperty("params")) {
			Object.assign(params, searchParams.params);
		}

		const request = apiClient.get<T>(`${this.endpoint}`, {
			signal,
			params,
		});

		return { request, cancel: () => controller.abort() };
	}
}

const createService = (endpoint: string) => new HttpService(endpoint);
export default createService;
