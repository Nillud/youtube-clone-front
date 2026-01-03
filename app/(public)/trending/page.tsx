import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Trending',
  alternates: {
    canonical: '/trending'
  },
  openGraph: {
    type: 'website',
    url: '/trending',
    title: 'Trending'
  }
}

export default function TrendingPage() {
  return <div>Trending</div>
}
