import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import Layout from '@/src/components/layout/Layout'

import { Providers } from '@/src/providers/Providers'

import './globals.scss'

const notoSans = Noto_Sans({
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		absolute: 'NilVideo',
		template: '%s | NilVideo'
	},
	description: 'Video service by Nillud'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${notoSans.className} antialiased`}>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	)
}
