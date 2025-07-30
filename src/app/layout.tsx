// Module imports
import {
	Geist,
	// eslint-disable-next-line camelcase
	Geist_Mono,
} from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { type Metadata } from 'next'





// Local imports
import { Banner } from '@/components/Banner/Banner'
import { Footer } from '@/components/Footer/Footer'

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





export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang={'en'}>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Banner />

				{children}

				<Footer />

				<Analytics />
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: 'gamesgamesgamesgamesgames',
	description: 'games!',
}
