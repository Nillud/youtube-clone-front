import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import { STUDIO_PAGE } from '@/config/studio-page.config'

import { SidebarHeader } from './header/SidebarHeader'
import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA, STUDIO_SIDEBAR_DATA } from './sidebar.data'

const DynamicSidebarMenu = dynamic(
	() => import('./menus/SidebarMenu').then(mod => mod.SidebarMenu),
	{ ssr: false }
)

const DynamicLogout = dynamic(() => import('./Logout').then(mod => mod.Logout), { ssr: false })

interface Props {
	isShowedSidebar: boolean
	toggleSidebar: () => void
}

export function Sidebar({ isShowedSidebar, toggleSidebar }: Props) {
	const pathname = usePathname()

	return (
		<aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
			<SidebarHeader toggleSidebar={toggleSidebar} />

			<DynamicSidebarMenu
				menu={SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>

			<SidebarSubscriptions />

			{!!pathname.includes(STUDIO_PAGE.HOME) && (
				<DynamicSidebarMenu
					title='Studio'
					menu={STUDIO_SIDEBAR_DATA}
					isShowedSidebar={isShowedSidebar}
				/>
			)}

			<DynamicSidebarMenu
				title='More from youtube'
				menu={MORE_SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>

			<DynamicLogout />
		</aside>
	)
}
