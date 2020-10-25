/**
 * The types that can be converted to a big integer.
 */
export type Big =
	| bigint
	| string
	| number
	| boolean
	;

/**
 * Convert to a big integer.
 * @param value The value to turn into a big integer.
 */
export function big (value: Big): bigint
{
	return BigInt(value);
}
