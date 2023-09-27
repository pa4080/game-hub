import { useEffect, useMemo, useState } from "react";

import { CanceledError } from "@/services/api-client";

import createRawgService from "@/services/http-service";
import { Endpoints } from "@/interfaces/rawg-endpoints";
// import { RawgInterfaces } from "@/interfaces/rawg-interfaces";

type SearchParamsType = [string, string][];
type SearchParamsExtT = SearchParamsType | string | null | undefined;

const useRawgApi = <EndpointType>(endpoint: Endpoints, searchParams?: SearchParamsExtT) => {
	// type EndpointType = RawgInterfaces[typeof endpoint];
	// type EndpointType = RawgInterfaces[RawgEndpoints.GAMES];

	const [items, setItems] = useState<EndpointType>();
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const rawgService = useMemo(() => createRawgService(`/${endpoint}`), [endpoint]);

	const getItemsBy = useMemo(
		() => (searchParams?: SearchParamsExtT) => {
			// Now we can pass directly RawgResponse[next/previous] url
			const params = searchParams
				? searchParams instanceof Array
					? searchParams
					: (searchParams
							?.replace(/^.*\?/, "")
							.split("&")
							.map((param) => param.split("=")) as SearchParamsType)
				: [];

			const { request, cancel } = rawgService.getAll<EndpointType>(params);

			setIsLoading(true);

			request
				.then((res) => {
					setItems(res.data);
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
		const cancel = getItemsBy(searchParams);

		return () => {
			cancel();
		};
	}, [getItemsBy, searchParams]);

	return { items, error, isLoading, getItemsBy };
};

export default useRawgApi;
