'use client'

import { Controller } from 'react-hook-form'

import { SkeletonLoader } from '@/components/ui/SkeletonLoader'
import { Button } from '@/components/ui/button/Button'
import { Field } from '@/components/ui/field/Field'
import { TextArea } from '@/components/ui/field/TextArea'
import { UploadField } from '@/components/ui/upload-field/UploadField'

import { useSettings } from './useSettings'

export function SettingsForm() {
	const {
		form: {
			handleSubmit,
			register,
			formState: { errors },
			control
		},
		isLoading,
		isProfileLoading,
		onSubmit
	} = useSettings()

	if (isProfileLoading) return <div>Loading...</div>

	return (
		<div className='w-3/5'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							label='Email'
							type='email'
							registration={register('email', { required: 'Email is required' })}
							error={errors.email?.message}
							placeholder='Enter email'
						/>

						<Field
							label='Password'
							type='password'
							registration={register('password')}
							error={errors.password?.message}
							placeholder='Enter password'
						/>

						<Field
							label='Name'
							type='text'
							registration={register('name')}
							error={errors.name?.message}
							placeholder='Enter name'
						/>

						<Field
							label='Slug (alias)'
							type='text'
							registration={register('channel.slug')}
							error={errors.channel?.slug?.message}
							placeholder='Enter slug'
						/>

						<TextArea
							label='Description'
							registration={register('channel.description')}
							error={errors.channel?.description?.message}
							placeholder='Enter description'
							rows={4}
						/>
					</div>

					<div>
						<Controller
							name='channel.avatarUrl'
							control={control}
							render={({ field: { onChange, value }, formState: { errors } }) => {
								return (
									<UploadField
										label='Avatar:'
										onChange={onChange}
										value={value}
										error={errors.channel?.avatarUrl}
										folder='avatars'
										className='mb-5'
									/>
								)
							}}
						/>
						<Controller
							name='channel.bannerUrl'
							control={control}
							render={({ field: { onChange, value }, formState: { errors } }) => {
								return (
									<UploadField
										label='Banner:'
										onChange={onChange}
										value={value}
										error={errors.channel?.bannerUrl}
										folder='avatars'
										aspectRatio='16:9'
										overlay='/overlay.png'
									/>
								)
							}}
						/>
					</div>
				</div>

				<div className='text-center mt-6 mt-10'>
					<Button
						type='submit'
						isLoading={isLoading}
					>
						Update
					</Button>
				</div>
			</form>
		</div>
	)
}
