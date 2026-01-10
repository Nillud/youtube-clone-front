import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { LogOut } from 'lucide-react'

import { authService } from '@/services/auth.service'
import { useTypedSelector } from '@/store'
import { useRouter } from 'next/navigation'

export function Logout() {
    const router = useRouter()

	const { mutate, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
        onSuccess: () => router.refresh()
	})

	const { isLoggedIn } = useTypedSelector(state => state.auth)

    if (!isLoggedIn) return null

	return (
		<button
			onClick={() => mutate()}
			className={'cursor-pointer group py-3 flex items-center gap-5'}
			title='Logout'
		>
			<LogOut
				className={cn(
					'min-w-6 group-hover:text-primary group-hover:rotate-6 transition duration-300'
				)}
			/>
			<span>{isPending ? 'Please wait...' : 'Logout'}</span>
		</button>
	)
}
