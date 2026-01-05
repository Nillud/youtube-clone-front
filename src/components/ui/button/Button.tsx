import cn from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	className?: string
	children: ReactNode
}

export function Button({ children, className = '', isLoading, ...props }: Props) {
	return (
		<button
			className={cn(
				'cursor-pointer py-2 px-10 bg-primary text-white font-semibold rounded hover:bg-red-400 transition-colors disabled:bg-gray-400',
				className
			)}
			disabled={isLoading || props.disabled}
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</button>
	)
}
