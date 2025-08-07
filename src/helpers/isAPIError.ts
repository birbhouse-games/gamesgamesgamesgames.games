// Local imports
import { APIError } from '@/typedefs/APIError'





/**
 * Tests an error to check if it's from the API library.
 *
 * @param error The error to be tesed.
 * @returns Whether the passed error is an API error.
 */
export function isAPIError(error: unknown): error is APIError {
	return error instanceof Error
		&& error.cause instanceof Response
}
