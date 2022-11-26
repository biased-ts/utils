/**
 * @summary Contains every possible type.
 */
type AllTypes = string | number | bigint | ((...args: readonly any[]) => any) | Record<string, unknown> | symbol | undefined | null;

export default AllTypes;