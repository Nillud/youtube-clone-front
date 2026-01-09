import { Video } from 'lucide-react'

import { Heading } from '@/components/ui/Heading'
import { VideoItem } from '@/components/ui/video-item/VideoItem'

import type { IChannel } from '@/types/channel.types'

interface Props {
	videos: IChannel['videos']
}

export function ChannelVideos({ videos }: Props) {
	return (
		<section className='mb-10'>
			<Heading Icon={Video}>Videos</Heading>
			<div className='grid-6-cols'>
				{videos.map(video => (
					<VideoItem
						key={video.id}
						video={video}
					/>
				))}
			</div>
		</section>
	)
}
