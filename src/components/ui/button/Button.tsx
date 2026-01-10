import cn from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	className?: string
	variant?: 'primary' | 'secondary'
	children: ReactNode
}

export function Button({
	children,
	className = '',
	variant = 'primary',
	isLoading = false,
	...props
}: Props) {
	return (
		<button
			className={cn(
				'cursor-pointer py-2 px-10 font-semibold rounded transition-colors disabled:bg-gray-400',
				{
					'bg-primary text-white hover:bg-red-400': variant === 'primary',
					'bg-gray-600 text-white hover:bg-gray-500': variant === 'secondary'
				},
				className
			)}
			disabled={isLoading || props.disabled}
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</button>
	)
}
