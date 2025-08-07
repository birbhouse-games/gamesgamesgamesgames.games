'use client'

// Module imports
import {
	Geist,
	// eslint-disable-next-line camelcase
	Geist_Mono,
} from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PropsWithChildren } from 'react'
// import { type Metadata } from 'next'





// Local imports
import { Banner } from '@/components/Banner/Banner'
import { Footer } from '@/components/Footer/Footer'
import { PageContent } from '@/components/PageContent/PageContent'
import { useWatchAuthToken } from '@/hooks/useWatchAuthToken'

import '@/styles/globals.scss'





// Constants
const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})





// Types
type Props = Readonly<PropsWithChildren>





export default function RootLayout(props: Props) {
	const { children } = props

	useWatchAuthToken()

	return (
		<html lang={'en'}>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Banner />

				<PageContent>
					{children}
				</PageContent>

				<Footer />

				<Analytics />
			</body>
		</html>
	)
}

// export const metadata: Metadata = {
// 	title: 'gamesgamesgamesgamesgames',
// 	description: 'games!',
// }
