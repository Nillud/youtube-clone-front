import dynamic from 'next/dynamic'

import { SidebarHeader } from './header/SidebarHeader'
import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

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
	return (
		<aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<DynamicSidebarMenu
				menu={SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>
			<SidebarSubscriptions />
			<DynamicSidebarMenu
				title='More from youtube'
				menu={MORE_SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>
			<DynamicLogout />
		</aside>
	)
}
