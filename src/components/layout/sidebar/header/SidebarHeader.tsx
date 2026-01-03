import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/src/constants/colors.constants'

import { PAGE } from '@/src/config/public-page.config'

interface Props {
	toggleSidebar: () => void
}

export function SidebarHeader({ toggleSidebar }: Props) {
	return (
		<div className='flex items-center gap-6 mb-12'>
			<button
				className='cursor-pointer opacity-85 hover:opacity-100 transition duration-300'
				onClick={toggleSidebar}
			>
				<Menu />
			</button>

			<Link
				href={PAGE.HOME}
				className='flex items-center gap-1.5'
			>
				<SquarePlay
					color={COLORS.primary}
					size={29}
				/>
				<span className='font-medium text-xl'>NilVideo</span>
			</Link>
		</div>
	)
}
