// Local imports
import { ApplicationNavigation } from '@/components/ApplicationNavigation/ApplicationNavigation'

import styles from './Banner.module.scss'





export function Banner() {
	return (
		<header
			className={styles['container']}
			role={'banner'}>
			<h1>{'gamesgamesgamesgamesgames'}</h1>

			<ApplicationNavigation />
		</header>
	)
}
