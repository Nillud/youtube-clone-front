import { Flame, Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'
import { VideoItem } from '@/components/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'
import { PAGE } from '@/config/public-page.config'

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

	return (
		<section className='mb-10'>
			<Heading Icon={Gamepad2}>Trending</Heading>
			<div className='grid-6-cols'>
				{!!videoGames.length ? (
					videoGames.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<div>Video games are temporary unavailable</div>
				)}
			</div>
		</section>
	)
}
