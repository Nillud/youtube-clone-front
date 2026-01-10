import type { Metadata } from 'next'

import { PAGE } from '@/config/public-page.config'

import { GamesPage } from './GamesPage'
import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Video games',
	alternates: {
		canonical: PAGE.VIDEO_GAMES
	},
	openGraph: {
		type: 'website',
		url: PAGE.VIDEO_GAMES,
		title: 'Video games'
	}
}

export default async function VideoGamesPage() {
	const data = await videoService.getVideoGames()
	const videoGames = data.data.videos

	return <GamesPage videoGames={videoGames} />
}
