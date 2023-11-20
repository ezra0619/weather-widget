import { stringIsSetAndFilled } from './values';

export function convertObjectValuesToStrings(
	object: Record<string, any>,
): Record<string, string> {
	return Object.entries(object).reduce(
		(previousValue, currentValue, currentIndex, array) => {
			return {
				...previousValue,
				[currentValue[0]]: currentValue[1].toString(),
			};
		},
		{},
	);
}

export function filterEmptyStringValues(
	object: Record<string, string>,
): Record<string, string> {
	return Object.entries(object).reduce((acc, cur) => {
		if (stringIsSetAndFilled(cur[1])) {
			return { ...acc, [cur[0]]: cur[1] };
		}
		return acc;
	}, {});
}

export function objectToQueryParams(object: Record<string, any>): string {
	const objectWithStringValues: Record<string, string> =
		convertObjectValuesToStrings(object);
	const filteredObject: Record<string, string> = filterEmptyStringValues(
		objectWithStringValues,
	);
	return Object.entries(filteredObject)
		.map(([key, val]) => `${key}=${val}`)
		.join('&');
}

export function getUrlWithQueryParams(
	rootUrl: string,
	paramsObject: Record<string, any>,
): string {
	const queryParams: string = objectToQueryParams(paramsObject);
	return `${rootUrl}?${queryParams}`;
}
