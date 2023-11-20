import { isString } from 'lodash';

export function stringIsSetAndFilled(value: any): boolean {
	return isString(value) && value.length > 0;
}

export function isValueSet(value: any): boolean {
	return value !== null && value !== undefined;
}
