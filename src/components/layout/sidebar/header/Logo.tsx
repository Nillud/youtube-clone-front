import { PAGE } from "@/src/config/public-page.config";
import { COLORS } from "@/src/constants/colors.constants";
import { SquarePlay } from "lucide-react";
import Link from "next/link";

export function Logo() {
	return (
		<Link
			href={PAGE.HOME}
			className='flex items-center gap-1.5'
		>
			<SquarePlay
				color={COLORS.primary}
				size={29}
			/>
			<span className='font-medium text-xl'>NilVideo</span>
		</Link>
	)
}
