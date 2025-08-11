// Module imports
import { type ReactNode } from 'react'





// Local imports
import { type TOAST_TYPES } from '@/constants/TOAST_TYPES'





export interface ToastConfig {
	duration?: number
	message: ReactNode
	type?: TOAST_TYPES
}
