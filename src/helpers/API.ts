// Module imports
import { type AppBskyActorProfile } from '@atproto/api'





// Local imports
import { JSONAPIResponse } from '@/typedefs/JSONAPIResponse'
import { store } from '@/store/store'





// Types
export type FetchOptions = Omit<RequestInit, 'body'> & {
	body?: unknown,
	headers?: Record<string, string>,
}





// Constants
const DEFAULT_FETCH_OPTIONS: FetchOptions = {
	// credentials: 'include',
}





/******************************************************************************\
 * Core functions
\******************************************************************************/


function apiFetch(path: string, rOptions: FetchOptions = {}) {
	const options: FetchOptions = {
		...DEFAULT_FETCH_OPTIONS,
		headers: {
			...DEFAULT_FETCH_OPTIONS.headers,
			...rOptions.headers,
		} as Record<string, string>,
	}
	Object.assign(options, rOptions)

	const { authToken } = store.state

	if (authToken) {
		options.headers!.Authorization = `Bearer ${authToken}`
	}

	if (typeof options.body !== 'string') {
		try {
			options.body = JSON.stringify(options.body)
			options.headers!['Content-Type'] = 'application/json'
		} catch (error) {
			console.log(error)
		}
	}

	return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path.replace(/^\/+/u, '')}`, options as RequestInit)
}

async function apiFetchJSON<T = Record<string, unknown>>(path: string, options?: FetchOptions): Promise<T> {
	const response = await apiFetch(path, options)

	if (response.ok) {
		return response.json()
	}

	throw new Error('Whoops.')
}





/******************************************************************************\
 * Helpers
\******************************************************************************/

/** @returns The Bluesky profile for the current user. */
export function getUserProfile() {
	return apiFetchJSON<JSONAPIResponse<AppBskyActorProfile.Record>>('/v1/atproto/user/profile')
}

/**
 * Redirects the user to the OAuth login for their PDS.
 *
 * @param handle The user's ATproto handle.
 * @param destination The path to which the user will be returned.
 */
export function login(handle: string, destination?: string) {
	const redirectUrl = new URL(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/atproto`)

	redirectUrl.searchParams.append('handle', handle)

	if (destination) {
		redirectUrl.searchParams.append('destination', destination)
	}

	window.location.href = redirectUrl.toString()
}

export function logout() {
	return apiFetch('/v1/auth/logout')
}
