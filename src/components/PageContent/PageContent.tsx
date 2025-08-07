// Module imports
import { PropsWithChildren } from 'react'





// Local imports
import styles from './PageContent.module.scss'





// Types
type Props = PropsWithChildren





export function PageContent(props: Props) {
	const { children } = props

	return (
		<div className={styles['container']}>
			{children}
		</div>
	)
}
