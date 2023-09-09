'use client'

import { Truths } from '@/app/[lang]/[truth]/_data/types'
import { colours } from '@/app/[lang]/_styles/colours'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { CSSProperties, PropsWithChildren } from 'react'

const activeBorderRadiuses = {
	[Truths.suffering]: '0px 24px 0px 0px',
	[Truths.origin]: '24px 24px 0px 0px',
	[Truths.cessation]: '24px 24px 0px 0px',
	[Truths['the-way']]: '24px 0px 0px 0px',
}

const inactiveBorderRadiuses: Record<
	Truths,
	Partial<Record<Truths, CSSProperties['borderRadius']>>
> = {
	[Truths.suffering]: {
		[Truths.origin]: '0px 0px 24px 0px',
	},
	[Truths.origin]: {
		[Truths.suffering]: '0px 0px 0px 24px',
		[Truths.cessation]: '0px 0px 24px 0px',
	},
	[Truths.cessation]: {
		[Truths.origin]: '0px 0px 0px 24px',
		[Truths['the-way']]: '0px 0px 24px 0px',
	},
	[Truths['the-way']]: {
		[Truths.cessation]: '0px 0px 0px 24px',
	},
}

const activeBackgroundColours: Record<
	Truths,
	[CSSProperties['backgroundColor'], CSSProperties['backgroundColor']]
> = {
	[Truths.suffering]: [colours[Truths.origin], colours[Truths.origin]],
	[Truths.origin]: [colours[Truths.suffering], colours[Truths.cessation]],
	[Truths.cessation]: [colours[Truths.origin], colours[Truths['the-way']]],
	[Truths['the-way']]: [colours[Truths.cessation], colours[Truths.cessation]],
}

interface Props extends PropsWithChildren {
	truth: Truths
}

export default function TruthsNavItemWrapper({ children, truth }: Props) {
	const pathname = usePathname()
	const isActive = pathname.includes(truth)
	const activeTruth = Object.values(Truths).find((t) => pathname.includes(t))!

	return (
		<motion.div
			className="relative flex flex-grow"
			initial={false}
			animate={{
				width: isActive ? '45%' : '18%',
				transition: { ease: 'easeIn' },
			}}
		>
			<motion.div
				className="flex flex-grow z-10"
				initial={false}
				style={{ backgroundColor: colours[truth] }}
				animate={{
					borderRadius: isActive
						? activeBorderRadiuses[truth]
						: inactiveBorderRadiuses?.[truth]?.[activeTruth] || 0,
					transition: { ease: 'easeIn' },
				}}
			>
				{children}
			</motion.div>
			<div className="absolute inset-0 flex flex-row">
				{activeBackgroundColours[truth].map((color, i) => (
					<motion.div
						key={color! + i}
						className="h-full w-full"
						initial={false}
						animate={{
							background: isActive ? color : colours[activeTruth],
							transition: { ease: 'easeIn' },
						}}
					/>
				))}
			</div>
		</motion.div>
	)
}
