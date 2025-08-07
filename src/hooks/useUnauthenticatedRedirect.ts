// Module imports
import {
	usePathname,
	useRouter,
} from 'next/navigation'
import { useEffect } from 'react'
import { useStore } from 'statery'





// Local imports
import { store } from '@/store/store'





/** Sends user to the login page if they're not authenticated. */
export function useUnauthenticatedRedirect() {
	const {
		isAuthenticated,
		isCheckingAuthentication,
	} = useStore(store)
  const pathname = usePathname()
	const router = useRouter()

	useEffect(() => {
		if (!isAuthenticated && !isCheckingAuthentication) {
			router.replace(`/login?destination=${pathname}`)
		}
	}, [
		isAuthenticated,
		isCheckingAuthentication,
		pathname,
		router,
	])
}
