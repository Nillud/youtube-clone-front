import { Flame, Video } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

import { Heading } from '@/components/ui/Heading'
import { VerifiedBadge } from '@/components/ui/VerifiedBadge'
import { Button } from '@/components/ui/button/Button'
import { VideoItem } from '@/components/ui/video-item/VideoItem'

import { transformCount } from '@/utils/transform-count'

import { ChannelVideos } from './ChannelVideos'
import { channelService } from '@/services/channel.service'
import type { TPageSlugProp } from '@/types/page.types'

export const revalidate = 100
export const dynamic = 'force-static'

export async function generateMetadata({ params }: TPageSlugProp): Promise<Metadata> {
	const currParams = await params
	const data = await channelService.bySlug(currParams.slug)
	const channel = data.data

	return {
		title: channel.user.name,
		description: channel.description,
		openGraph: {
			type: 'profile',
			images: [channel.bannerUrl]
		}
	}
}

export async function generateStaticParams() {
	const { data } = await channelService.getAll()

	return data.map(channel => ({
		slug: channel.slug
	}))
}

export default async function ChannelPage({ params }: TPageSlugProp) {
	const currParams = await params
	const data = await channelService.bySlug(currParams.slug)
	const channel = data.data

	return (
		<>
			<div>
				<Image
					alt={channel.user.name || ''}
					src={channel.bannerUrl}
					width={1284}
					height={207}
					className='rounded-3xl'
				/>

				<div className='flex items-center gap-5 mt-7 mb-12 w-1/2'>
					<Image
						alt={channel.slug || ''}
						src={channel.avatarUrl}
						width={162}
						height={162}
						className='rounded-full flex-shrink-0'
					/>

					<div>
						<Heading isPageHeading className='mb-3'>
							<span className='flex items-center gap-2'>
								{channel.user.name}
								{channel.isVerified && <VerifiedBadge size={20} />}
							</span>
						</Heading>

						<div className='mb-2 text-gray-400 text-[0.9rem] flex items-center gap-1'>
							<span>@{channel.slug}</span>
							<span>•</span>
							<span>{transformCount(channel.subscribers.length)} subscribers</span>
							<span>•</span>
							<span>{transformCount(channel.videos.length)} videos</span>
						</div>

						<article className='mb-2 text-gray-400 text-sm leading-snug w-3/4'>{channel.description}</article>
						<Button>Subscribe</Button>
					</div>
				</div>
			</div>
			{!!channel.videos.length && <ChannelVideos videos={channel.videos} />}
		</>
	)
}
