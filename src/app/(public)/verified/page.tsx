import { Check } from 'lucide-react'

export default function VerifiedPage() {
	return (
		<div className='mx-auto w-1/2 mt-24 text-center'>
			<h1 className='font-semibold text-5xl mb-5 inline-flex gap-2 items-center'>
				<Check color='green' size={60} />
                <span>Email successfully verified</span>
			</h1>
		</div>
	)
}
