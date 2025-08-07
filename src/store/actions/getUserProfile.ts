// Local imports
import { isAPIError } from '@/helpers/isAPIError'
import { logout } from '@/store/actions/logout'
import { store } from '@/store/store'
import * as API from '@/helpers/API'





/** Retrieves the current user's profile and caches it in the global store. */
export async function getUserProfile() {
	const {
		isCheckingAuthentication,
		isAuthenticated,
	} = store.state

	if (!isCheckingAuthentication && isAuthenticated) {
		store.set(() => ({ isRetrievingProfile: true }))

		try {
			const { data } = await API.getUserProfile()

			store.set(() => ({
				isRetrievingProfile: false,
				userProfile: data,
			}))
		} catch (error) {
			if (isAPIError(error)) {
				if (error.cause.status === 401) {
					await logout()
				}
			}
		}
	}
}
