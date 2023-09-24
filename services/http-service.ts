import apiClient from "./api-client";

class HttpService {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll<T>(searchParams?: [string, string][]) {
		const controller = new AbortController();
		const signal = controller.signal;
		const params: { [key: string]: string } = {};

		if (searchParams) {
			searchParams.forEach((param) => {
				params[param[0]] = param[1];
			});
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
