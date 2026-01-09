import Image from 'next/image'

import { SkeletonLoader } from '../SkeletonLoader'

interface Props {
	isLoading: boolean
	value?: string
	overlay?: string
	aspectRatio?: '16:9' | '1:1'
}

export function ImagePreview({ isLoading, value, overlay, aspectRatio }: Props) {
	const isWidescreenRatio = aspectRatio === '16:9'

	const width = isWidescreenRatio ? 446 : 100
	const height = isWidescreenRatio ? 250 : 100

	return (
		<div>
			<div className='mt-3'>
				{isLoading ? (
					<SkeletonLoader style={{ width, height }} />
				) : (
					!!value && (
						<div className='relative'>
							{!!overlay && (
								<Image
									alt='Overlay'
									className='rounded-md absolute top-0 left-0'
									src={overlay}
									width={width}
									height={height}
                                    priority
								/>
							)}

							<Image
								alt='Uploaded file'
								className='rounded-md'
								src={value}
								width={width}
								height={height}
                                priority
							/>
						</div>
					)
				)}
			</div>
		</div>
	)
}
