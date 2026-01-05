import { Menu } from 'lucide-react'
import { Logo } from './Logo'

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

			<Logo />
		</div>
	)
}
