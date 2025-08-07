// Module imports
import { useEffect } from 'react'





// Local imports
import { store } from '@/store/store'





/** Keeps the auth token updated across the application. */
export function useWatchAuthToken() {
	useEffect(() => {
		const params = new URLSearchParams(window.location.hash.replace(/^#/u, ''))
		let token = params.get('token')

		if (token) {
			// eslint-disable-next-line security/detect-non-literal-regexp
			const tokenRegex = new RegExp(`token=${token}&?`, 'giu')

			// Cache the token in the browser
			localStorage.setItem('authToken', token)

			// Remove the token from the address bar
			window.location.hash = window.location.hash.replace(tokenRegex, '')
		} else {
			token = localStorage.getItem('authToken')
		}

		store.set(() => ({
			authToken: token,
			isAuthenticated: Boolean(token),
			isCheckingAuthentication: false,
		}))
	}, [])
}
