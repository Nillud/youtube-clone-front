'use client'

import { Flame } from 'lucide-react'

import { Heading } from '@/components/ui/Heading'
import { VideoItem } from '@/components/ui/video-item/VideoItem'

import type { IVideo } from '@/types/video.types'

interface Props {
	trendingVideos: IVideo[]
}

export function TrendingPage({ trendingVideos }: Props) {
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
