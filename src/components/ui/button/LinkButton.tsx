import cn from 'clsx'
import Link, { type LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TLink = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

interface Props extends TLink {
	isLoading?: boolean
	className?: string
	children: ReactNode
}

export function LinkButton({ children, className = '', isLoading, ...props }: Props) {
	return (
		<Link
			className={cn(
				'py-2 px-4 bg-primary text-white font-semibold rounded hover:bg-red-400 transition-colors disabled:bg-gray-400',
				className
			)}
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</Link>
	)
}
