import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'
import { VideoItem } from '@/components/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'
import { PAGE } from '@/config/public-page.config'

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

export default async function TrendingPage() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data

	return (
		<section className='mb-10'>
			<Heading Icon={Flame}>Trending</Heading>
			<div className='grid-6-cols'>
				{!!trendingVideos.length ? (
					trendingVideos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))
				) : (
					<div>Trends are temporary unavailable</div>
				)}
			</div>
		</section>
	)
}
