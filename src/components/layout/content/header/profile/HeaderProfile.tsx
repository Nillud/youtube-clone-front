'use client'

import { LinkButton } from '@/components/ui/button/LinkButton'

import { PAGE } from '@/config/public-page.config'

import { useTypedSelector } from '@/store'
import { LogIn } from 'lucide-react'
import { HeaderAvatar } from './HeaderAvatar'

export function HeaderProfile() {
	const { isLoggedIn } = useTypedSelector(state => state.auth)

	return isLoggedIn ? (
		<HeaderAvatar />
	) : (
		<LinkButton href={PAGE.AUTH} className='flex items-center gap-1'>
			<span><LogIn size={20} /></span>
			<span>Auth</span>
		</LinkButton>
	)
}
