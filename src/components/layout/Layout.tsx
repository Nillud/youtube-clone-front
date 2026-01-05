'use client'

import cn from 'clsx'
import { type PropsWithChildren, useState } from 'react'

import Content from './content/Content'
import { Sidebar } from './sidebar/Sidebar'

import styles from './Layout.module.scss'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSidebar] = useState<boolean>(true)

	const toggleSidebar = () => setIsShowedSidebar(!isShowedSidebar)

	return (
		<div
			className={cn(
				'flex min-h-screen',
				styles.initialSidebar,
				isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
			)}
		>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</div>
	)
}

