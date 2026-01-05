'use client'

import Image from 'next/image'
import Link from 'next/link'

import { LinkButton } from '@/src/components/ui/button/LinkButton'

import { PAGE } from '@/src/config/public-page.config'
import { STUDIO_PAGE } from '@/src/config/studio-page.config'

import { useTypedSelector } from '@/src/store'
import { LogIn } from 'lucide-react'

export function HeaderProfile() {
	const { isLoggedIn } = useTypedSelector(state => state.auth)

	return isLoggedIn ? (
		<Link
			href={STUDIO_PAGE.SETTINGS}
			className='shrink-0'
		>
			<Image
				src={'/uploads/avatars/redgroup.jpg'}
				alt=''
				width={40}
				height={40}
				className='rounded-md'
			/>
		</Link>
	) : (
		<LinkButton href={PAGE.AUTH} className='flex items-center gap-1'>
			<span><LogIn size={20} /></span>
			<span>Auth</span>
		</LinkButton>
	)
}
