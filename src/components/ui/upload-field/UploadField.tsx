import { UploadCloud } from 'lucide-react'
import Image from 'next/image'
import { useId } from 'react'
import type { FieldError } from 'react-hook-form'

import { SkeletonLoader } from '../SkeletonLoader'

import { ImagePreview } from './ImagePreview'
import { useUpload } from './useUpload'

interface Props {
	folder?: string
	value?: string
	onChange: (url: string) => void
	label: string
	error?: FieldError
	className?: string
	isImage?: boolean
	aspectRatio?: '16:9' | '1:1'
	overlay?: string
}

export function UploadField({
	folder,
	value,
	onChange,
	label,
	error,
	className,
	isImage = true,
	aspectRatio = '1:1',
	overlay
}: Props) {
	const { isLoading, uploadFile } = useUpload({ onChange, folder })
	const inputId = useId()

	return (
		<div className={className}>
			<label
				htmlFor={inputId}
				className='block text-gray-400 font-semibold mb-2'
			>
				{label}
			</label>

			<label
				htmlFor={inputId}
				className='flex items-center px-4 py-2 bg-gransparent border border-primary text-primary rounded-lg shadow-md cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 w-max'
			>
				<UploadCloud className='mr-2' />
				<span>Загрузить</span>
			</label>

			<input
				id={inputId}
				type='file'
				onChange={uploadFile}
				accept='image/*'
				className='hidden'
			/>

			{error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}

			{isImage && (
				<ImagePreview
					isLoading={isLoading}
					aspectRatio={aspectRatio}
					value={value}
					overlay={overlay}
				/>
			)}
		</div>
	)
}
