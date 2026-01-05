import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/src/components/ui/Heading'
import { VideoItem } from '@/src/components/ui/video-item/VideoItem'

import { Explore } from './explore/Explore'
import { videoService } from '@/src/services/video.service'
import { PAGE } from '@/src/config/public-page.config'

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

	return (
		<>
			{!!trendingVideos.length && (
				<section className='mb-10'>
					<Heading Icon={Flame}>Trending</Heading>
					<div className='grid-6-cols'>
						{trendingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
					</div>
				</section>
			)}
			<section>
				<Explore />
			</section>
		</>
	)
}
