import type { Metadata } from 'next'

import { videoService } from '@/services/video.service'
import { PAGE } from '@/config/public-page.config'
import { TrendingPage } from './TrendingPage'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Trending',
	alternates: {
		canonical: PAGE.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PAGE.TRENDING,
		title: 'Trending'
	}
}

export default async function TrendPage() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data

	return <TrendingPage trendingVideos={trendingVideos} />
}
