'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button/Button'

import { PAGE } from '@/config/public-page.config'

import { useProfile } from '@/hooks/useProfile'

import { channelService } from '@/services/channel.service'

interface Props {
	slug: string
}

export function SubscribeButton({ slug }: Props) {
	const router = useRouter()

	const { profile, refetch } = useProfile()

	const { mutate, isPending } = useMutation({
		mutationKey: ['subscribe'],
		mutationFn: () => channelService.toggleSubscribe(slug),
		onSuccess: () => refetch()
	})

	const clickHandler = () => {
		if (profile) mutate()
		else router.push(PAGE.AUTH)
	}

	const isSubscribed = profile?.subscriptions.some(sub => sub.slug === slug)

	return (
		<Button
			onClick={clickHandler}
			variant={isSubscribed ? 'secondary' : 'primary'}
		>
			{isPending ? 'Subscribing...' : isSubscribed ? 'Subscribed' : 'Subscribe'}
		</Button>
	)
}
