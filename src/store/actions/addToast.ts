// Module imports
import { v4 as uuid } from 'uuid'





// Local imports
import { store } from '../store'
import { TOAST_TYPES } from '@/constants/TOAST_TYPES'
import { type ToastConfig } from '@/typedefs/ToastConfig'
import { type ToastData } from '@/typedefs/ToastData'





/**
 * Adds a toast to be displayed by the ToastManager.
 *
 * @param config Configuration for the toast to be displayed.
 */
export function addToast(config: ToastConfig | string) {
	const newToast = {
		duration: 7500,
		id: uuid(),
		type: TOAST_TYPES.default,
	} as ToastData

	if (typeof config === 'string') {
		newToast.message = config
	} else {
		Object.assign(newToast, config)
	}

	store.set(previousState => ({
		toastQueue: [
			newToast,
			...previousState.toastQueue,
		],
	}))

	setTimeout(() => {
		store.set(previousState => ({
			toastQueue: previousState.toastQueue.filter(toast => toast.id !== newToast.id),
		}))
	}, newToast.duration)
}
