import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useProfile } from '@/hooks/useProfile'

import type { ISettingsData } from './settings.types'
import { userService } from '@/services/user.service'
import { useEffect } from 'react'

export function useSettings() {
	const form = useForm<ISettingsData>({
		mode: 'onChange'
	})

	const { profile, isSuccess, isLoading: isProfileLoading } = useProfile()

    useEffect(() => {
      if (!isSuccess) return
      form.reset(profile)
    }, [profile, isSuccess, form])

	const { mutate, isPending: isUpdatePending } = useMutation({
		mutationKey: ['update-settings'],
		mutationFn: (data: ISettingsData) => userService.updateProfile(data)
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
