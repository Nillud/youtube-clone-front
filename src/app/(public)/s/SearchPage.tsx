'use client'

import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Heading } from '@/components/ui/Heading'
import { SkeletonLoader } from '@/components/ui/SkeletonLoader'
import { VideoItem } from '@/components/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export function SearchPage() {
	const searchParams = useSearchParams()
	const searchTerm = searchParams.get('term')

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchTerm],
		queryFn: () => videoService.getAll(searchTerm)
	})

	return (
		<section>
			<Heading
				isH1
				Icon={Search}
			>
				Search by &quot;{searchTerm}&quot;
			</Heading>
			<div className='grid grid-cols-6 gap-6'>
				{isLoading ? (
					<SkeletonLoader
						count={6}
						className='h-36 rounded-md'
					/>
				) : data?.data.videos.length ? (
					data.data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<p>Videos not found</p>
				)}
			</div>
		</section>
	)
}
