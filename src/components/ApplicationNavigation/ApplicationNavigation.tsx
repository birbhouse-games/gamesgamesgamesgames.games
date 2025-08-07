// Module imports
import { useStore } from 'statery'





// Local imports
import { Link } from '@/components/Link/Link'
import { store } from '@/store/store'
import { UserMenu } from '@/components/UserMenu/UserMenu'

import styles from './ApplicationNavigation.module.scss'





export function ApplicationNavigation() {
	const { isAuthenticated } = useStore(store)

	return (
		<nav className={styles['container']}>
			<Link href={'/'}>{'Home'}</Link>
			<Link href={'/about'}>{'About'}</Link>

			{isAuthenticated && (
				<UserMenu />
			)}

			{!isAuthenticated && (
				<Link href={'/login'}>{'Login'}</Link>
			)}
		</nav>
	)
}
