import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

interface Props {
	toggleSidebar: () => void
}

export function Sidebar({ toggleSidebar }: Props) {
	return (
		<aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenu menu={SIDEBAR_DATA} />
			<SidebarSubscriptions />
			<SidebarMenu
				title='More from youtube'
				menu={MORE_SIDEBAR_DATA}
			/>
		</aside>
	)
}
