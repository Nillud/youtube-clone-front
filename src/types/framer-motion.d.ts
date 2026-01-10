import { MotionProps } from 'framer-motion'

declare module 'framer-motion' {
	export interface MotionProps {
		whileHover?: { scale?: number; y?: number }
		transition?: {
			type?: string
			stiffness?: number
			damping?: number
		}
	}
}
