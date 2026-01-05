'use client'

import { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { Logo } from '@/src/components/layout/sidebar/header/Logo'
import { SkeletonLoader } from '@/src/components/ui/SkeletonLoader'
import { Button } from '@/src/components/ui/button/Button'
import { Field } from '@/src/components/ui/field/Field'

import type { IAuthForm } from './auth-form.types'
import { useAuthForm } from './useAuthForm'

import { useTypedSelector, type TRootState } from '@/src/store'
import { useRouter } from 'next/navigation'
import { PAGE } from '@/src/config/public-page.config'

export function Auth() {
	const router = useRouter()

	const [isLogin, setIsLogin] = useState<boolean>(true)

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const password = watch('password')

	const { isLoading, onSubmit, recaptchaRef } = useAuthForm(isLogin ? 'login' : 'register', reset)

	const accessToken = useTypedSelector((state) => state.auth.accessToken)

	useEffect(() => {
	  if (!accessToken) return
	  router.push(PAGE.HOME)
	}, [])
	
	return (
		<div className='w-screnn h-screen flex justify-center items-center'>
			<div className='w-1/6 p-layout border border-border rounded'>
				<div className='flex justify-center mb-1'>
					<Logo />
				</div>

				<div className='flex justify-center mb-6'>
					<button
						type='button'
						className={`cursor-pointer px-4 py-2 font-semibold ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
						onClick={() => setIsLogin(true)}
					>
						Login
					</button>
					<button
						type='button'
						className={`cursor-pointer px-4 py-2 font-semibold ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
						onClick={() => setIsLogin(false)}
					>
						Register
					</button>
				</div>

				{isLoading ? (
					<SkeletonLoader count={isLogin ? 3 : 4} />
				) : (
					<>
						<Field
							label='Email'
							type='email'
							registration={register('email', { required: 'Email is required' })}
							error={errors.email?.message}
							placeholder='Enter emails'
						/>

						<Field
							label='Password'
							type='password'
							registration={register('password', { required: 'Password is required' })}
							error={errors.password?.message}
							placeholder='Enter password'
						/>

						{!isLogin && (
							<Field
								label='Password confirmation'
								type='password'
								registration={register('confirmPassword', {
									required: 'Password confirmation is required',
									validate: value => value === password || 'Passwords don`t match'
								})}
								error={errors.confirmPassword?.message}
								placeholder='Enter password again'
							/>
						)}

						<div className='flex justify-center'>
							<ReCAPTCHA
								ref={recaptchaRef}
								size='normal'
								sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
								theme='light'
								className={'.recaptcha'}
							/>
						</div>
					</>
				)}

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='text-center mt-6'>
						<Button
							type='submit'
							isLoading={isLoading}
						>
							{isLogin ? 'Login' : 'Register'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
