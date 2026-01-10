'use client'

import { Gamepad2 } from 'lucide-react'

import { Heading } from '@/components/ui/Heading'
import { VideoItem } from '@/components/ui/video-item/VideoItem'

import type { IVideo } from '@/types/video.types'

interface Props {
	videoGames: IVideo[]
}

export function GamesPage({ videoGames }: Props) {
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
