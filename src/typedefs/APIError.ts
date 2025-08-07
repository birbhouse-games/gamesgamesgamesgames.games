export type APIError = Error & {
	cause: Response
}
