'use client'

// Module imports
import { PropsWithChildren } from 'react'





// Local imports
import { useUnauthenticatedRedirect } from '@/hooks/useUnauthenticatedRedirect'





// Types
type Props = Readonly<PropsWithChildren>





export default function DashboardLayout(props: Props) {
	const { children } = props

	useUnauthenticatedRedirect()

	return children
}
