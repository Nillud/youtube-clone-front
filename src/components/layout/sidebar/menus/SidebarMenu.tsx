import { match } from 'path-to-regexp'

import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'
import { usePathname } from 'next/navigation'

interface Props {
	title?: string
	menu: ISidebarItem[]
	isShowedSidebar: boolean
}

export function SidebarMenu({ isShowedSidebar, title, menu }: Props) {
	const pathname = usePathname()

	return (
		<nav>
			{title && (
				<div className='opacity-45 transition-opacity duration-300 font-medium uppercase text-xs mb-3'>
					{title}
				</div>
			)}

			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.label}
						item={menuItem}
						isActive={!!match(menuItem.link)(pathname)}
						isShowedSidebar={isShowedSidebar}
					/>
				))}
			</ul>
		</nav>
	)
}
