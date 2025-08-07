// Local imports
import { store } from '@/store/store'
import * as API from '@/helpers/API'





export async function logout() {
	await API.logout()

	store.set(() => ({
		isAuthenticated: false,
		userProfile: null,
	}))
}
