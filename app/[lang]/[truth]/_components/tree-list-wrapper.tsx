'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

export interface TreeListWrapperProps extends PropsWithChildren {
	className: HTMLUListElement['className']
}

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

export default function TreeListWrapper({
	children,
	className,
}: TreeListWrapperProps) {
	return (
		<motion.ul
			className={className}
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
		>
			{children}
		</motion.ul>
	)
}
