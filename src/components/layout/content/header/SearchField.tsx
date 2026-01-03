import { useRouter } from 'next/navigation'
import { type KeyboardEvent, useState } from 'react'

import { PAGE } from '@/src/config/public-page.config'

export function SearchField() {
	const router = useRouter()

	const [searchTerm, setSearchTerm] = useState<string>('')

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter') return

		e.preventDefault()

		if (searchTerm.trim() !== '') router.push(PAGE.SEARCH(encodeURIComponent(searchTerm)))
	}

	return (
		<div className='w-1/3'>
			<input
				type='search'
				placeholder='Type to search'
				className='py-2 px-4 bg-transparent w-4/6 outline-none border-none'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	)
}
