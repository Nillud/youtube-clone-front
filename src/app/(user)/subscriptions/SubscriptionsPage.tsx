'use client'

import dynamic from 'next/dynamic'

import { SkeletonLoader } from '@/components/ui/SkeletonLoader'

const DynamicSubscriptionsBody = dynamic(
	() => import('./SubscriptionsBody').then(mod => mod.SubscriptionsBody),
	{
		ssr: false,
		loading: () => (
			<div className='grid grid-cols-6 gap-6'>
				<SkeletonLoader
					count={6}
					className='h-36 rounded-md'
				/>
			</div>
		)
	}
)

export function SubscriptionsPage() {
	return <DynamicSubscriptionsBody />
}
