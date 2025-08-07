// Local imports
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

		const { data } = await API.getUserProfile()

		store.set(() => ({
			isRetrievingProfile: false,
			userProfile: data,
		}))
	}
}
