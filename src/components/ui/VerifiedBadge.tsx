import { BadgeCheck } from 'lucide-react'

interface Props {
	size?: number
}

export function VerifiedBadge({ size = 15 }: Props) {
	return (
		<span>
			<BadgeCheck
				className='text-green-500'
				size={size}
			/>
		</span>
	)
}
