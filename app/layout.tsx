import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import './globals.scss'
import Layout from '@/src/components/layout/Layout'

const notoSans = Noto_Sans({
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'NilVideo',
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
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
