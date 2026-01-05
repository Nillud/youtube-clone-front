import type { PropsWithChildren } from 'react'

import Layout from '@/src/components/layout/Layout'

export default function PublicLayout({ children }: PropsWithChildren) {
	return <Layout>{children}</Layout>
}
