'use client'

import { Heart } from 'lucide-react'

import { Heading } from '@/components/ui/Heading'
import { SkeletonLoader } from '@/components/ui/SkeletonLoader'
import { VideoItem } from '@/components/ui/video-item/VideoItem'

import { useProfile } from '@/hooks/useProfile'

export function SubscriptionsBody() {
	const { profile, isLoading } = useProfile()

	return (
		<section>
			<Heading
				isPageHeading
				Icon={Heart}
			>
				Subscriptions
			</Heading>
			<div className='grid grid-cols-6 gap-6'>
				{isLoading ? (
					<SkeletonLoader
						count={6}
						className='h-36 rounded-md'
					/>
				) : profile?.subscribedVideos?.length ? (
					profile?.subscribedVideos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<p>Subscriptions not found</p>
				)}
			</div>
		</section>
	)
}
