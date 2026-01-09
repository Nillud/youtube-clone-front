import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useProfile } from '@/hooks/useProfile'

import type { ISettingsData } from './settings.types'
import { userService } from '@/services/user.service'
import toast from 'react-hot-toast'

export function useSettings() {
	const form = useForm<ISettingsData>({
		mode: 'onChange'
	})

	const { profile, isSuccess, isLoading: isProfileLoading, refetch } = useProfile()

	useEffect(() => {
		if (!isSuccess) return

		const channel = profile?.channel
			? {
					avatarUrl: profile.channel.avatarUrl,
					bannerUrl: profile.channel.bannerUrl,
					description: profile.channel.description,
					slug: profile.channel.slug
				}
			: {}

		form.reset({
			channel,
			email: profile?.email,
			name: profile?.name
		})
	}, [profile, isSuccess, form])

	const { mutate, isPending: isUpdatePending } = useMutation({
		mutationKey: ['update-settings'],
		mutationFn: (data: ISettingsData) => userService.updateProfile(data),
		onSuccess() {
			toast.success('Profile was updated')
			refetch()
		}
	})

	const onSubmit: SubmitHandler<ISettingsData> = data => {
		mutate(data)
	}

	return {
		form,
		onSubmit,
		isLoading: isUpdatePending,
		isProfileLoading
	}
}
