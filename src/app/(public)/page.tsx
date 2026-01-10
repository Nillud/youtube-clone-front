import type { Metadata } from 'next'

import { PAGE } from '@/config/public-page.config'

import { HomePage } from './HomePage'
import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Explore',
	alternates: {
		canonical: PAGE.HOME
	},
	openGraph: {
		type: 'website',
		url: PAGE.HOME,
		title: 'Explore'
	}
}

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data

	return <HomePage trendingVideos={trendingVideos} />
}
