// Module imports
import { useStore } from 'statery'





// Local imports
import { Button } from '@/components/Button/Button'
import { logout } from '@/store/actions/logout'
import { store } from '@/store/store'

import styles from './UserMenu.module.scss'





export function UserMenu() {
	const { userProfile } = useStore(store)

	const handleLogoutClick = () => {
		logout()
	}

	if (!userProfile) {
		return null
	}

	return (
		<div className={styles['container']}>
			<div className={styles['avatar-wrapper']}>
				<img
					alt={`${userProfile.displayName}'s avatar`}
					src={''} />
			</div>

			<div className={styles['menu-wrapper']}>
				<Button onClick={handleLogoutClick}>{'Logout'}</Button>
			</div>
		</div>
	)
}
