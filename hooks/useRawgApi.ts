import { useEffect, useMemo, useState } from "react";

import { CanceledError } from "@/services/api-client";

import createRawgService from "@/services/http-service";
import { Endpoints } from "@/interfaces/rawg-endpoints";
// import { RawgInterfaces } from "@/interfaces/rawg-interfaces";

export type SearchParamsType = [string, string][] | { params: {} };
export type SearchParamsExtT = SearchParamsType | string | null | undefined;

const useRawgApi = <EndpointType>(endpoint: Endpoints, searchParams?: SearchParamsExtT) => {
	// type EndpointType = RawgInterfaces[typeof endpoint];
	// type EndpointType = RawgInterfaces[RawgEndpoints.GAMES];

	const [data, setData] = useState<EndpointType>();
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const rawgService = useMemo(() => createRawgService(`/${endpoint}`), [endpoint]);

	/**
	 * We can use query defined in the following formats:
	 * - string: "name=Super%20Mario"
	 * - array: ["name", "Super Mario"]
	 * - object: { params: { name: "Super Mario" } }
	 *
	 * Note in the Mosh's tutorial the body of this function is placed
	 * directly within the useEffect() hook callback.
	 * And an optional dependency array is used to trigger the new fetch,
	 * which is a bit elegant.
	 * @see https://github.com/mosh-hamedani/game-hub/blob/main/src/hooks/useData.ts
	 * @see https://members.codewithmosh.com/courses/ultimate-react-part1-1/lectures/45916351
	 */
	const getDataBy = useMemo(
		() => (searchParams?: SearchParamsExtT) => {
			let params: SearchParamsType;

			if (typeof searchParams === "string") {
				params = searchParams
					?.replace(/^.*\?/, "")
					.split("&")
					.map((param) => param.split("=")) as SearchParamsType;
			} else if (searchParams instanceof Array) {
				params = searchParams;
			} else if (searchParams instanceof Object && searchParams.hasOwnProperty("params")) {
				params = searchParams;
			} else {
				params = [];
			}

			setIsLoading(true);

			const { request, cancel } = rawgService.getAll<EndpointType>(params);

			request
				.then((res) => {
					setData(res.data);
					setIsLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) {
						return;
					}

					setError(err.message);
					setIsLoading(false);
				});

			return cancel;
		},
		[rawgService]
	);

	useEffect(() => {
		const cancel = getDataBy(searchParams);

		return () => {
			cancel();
		};
	}, [getDataBy, searchParams]);

	return { data, error, isLoading, getDataBy };
};

export default useRawgApi;
