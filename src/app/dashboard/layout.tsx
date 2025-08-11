'use client'

// Module imports
import { PropsWithChildren } from 'react'





// Local imports
import { ToastManager } from '@/components/ToastManager/ToastManager'
import { useUnauthenticatedRedirect } from '@/hooks/useUnauthenticatedRedirect'





// Types
type Props = Readonly<PropsWithChildren>





export default function DashboardLayout(props: Props) {
	const { children } = props

	useUnauthenticatedRedirect()

	return (
		<>
			<ToastManager />
			{children}
		</>
	)
}
