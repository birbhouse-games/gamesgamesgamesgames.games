// Module imports
import classnames from 'classnames'
import { motion } from 'motion/react'
import { type Variants } from 'motion'





// Local imports
import { type ToastData } from '@/typedefs/ToastData'

import styles from './Toast.module.scss'





// Types
type Props = Readonly<{ data: ToastData }>





// Constants
const TOAST_VARIANTS: Variants = {
	animate: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			bounce: 0.1,
			type: 'spring',
		},
	},
	exit: {
		opacity: 0,
		x: 100,
		y: 0,
	},
	initial: {
		opacity: 0,
		x: 0,
		y: -100,
	},
}





export function Toast(props: Props) {
	const { data } = props

	const compiledClassName = classnames(styles['wrapper'], `type-${data.type}`)

	return (
		<motion.div
			animate={'animate'}
			className={compiledClassName}
			exit={'exit'}
			initial={'initial'}
			layout
			variants={TOAST_VARIANTS}>
			<div className={styles['container']}>
				{`${data.id}: ${data.message}`}
			</div>
		</motion.div>
	)
}
