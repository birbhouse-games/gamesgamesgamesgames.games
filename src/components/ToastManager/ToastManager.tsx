// Module imports
import { AnimatePresence } from 'motion/react'
import { useStore } from 'statery'





// Local imports
import { store } from '@/store/store'
import { Toast } from '@/components/Toast/Toast'

import styles from './ToastManager.module.scss'





export function ToastManager() {
	const { toastQueue } = useStore(store)

	return (
		<div className={styles['container']}>
			<AnimatePresence>
				{toastQueue.map(toastData => (
					<Toast
						key={toastData.id}
						data={toastData} />
				))}
			</AnimatePresence>
		</div>
	)
}
