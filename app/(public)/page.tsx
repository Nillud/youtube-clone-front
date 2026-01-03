import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/src/components/ui/Heading'
import { VideoItem } from '@/src/components/ui/video-item/VideoItem'

import { Explore } from './explore/Explore'
import { videoService } from '@/src/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Explore',
	alternates: {
		canonical: '/'
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'Explore'
	}
}

export default async function Home() {
	const data = await videoService.getTrendingVideos(true)
	const trendingVideos = data.data

	return (
		<>
			<section className='mb-10'>
				<Heading Icon={Flame}>Trending</Heading>
				<div className='grid grid-cols-6 gap-6'>
					{!!trendingVideos.length &&
						trendingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
				</div>
			</section>
			<section>
				<Explore />
			</section>
		</>
	)
}
