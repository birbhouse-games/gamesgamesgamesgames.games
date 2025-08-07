'use client'

// Module imports
import { useEffect } from 'react'
import { useStore } from 'statery'





// Local imports
import { getUserProfile } from '@/store/actions/getUserProfile'
import { store } from '@/store/store'

// import styles from './page.module.scss'





export default function DashboardPage() {
	const {
		isAuthenticated,
		isCheckingAuthentication,
		isRetrievingProfile,
		userProfile,
	} = useStore(store)

	useEffect(() => {
		if (isAuthenticated && !isCheckingAuthentication && !userProfile && !isRetrievingProfile) {
			getUserProfile()
		}
	}, [
		isAuthenticated,
		isCheckingAuthentication,
		isRetrievingProfile,
		userProfile,
	])

	console.log({
		isAuthenticated,
		isCheckingAuthentication,
		isRetrievingProfile,
		userProfile,
	})

	return (
		<main>
			{isRetrievingProfile && ('Loading profile...')}
			{(userProfile !== null) && (
				`Welcome to your dashboard, ${userProfile.displayName}!`
			)}
		</main>
	)
}
