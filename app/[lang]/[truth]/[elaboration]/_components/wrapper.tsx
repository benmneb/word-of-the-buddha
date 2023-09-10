'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export default function ElaborationWrapper({ children }: Props) {
	return (
		<motion.section
			className="bg-violet-300 h-full rounded-tl-3xl"
			initial={{ opacity: 0, x: 150 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 150 }}
		>
			<article className="p-4">{children}</article>
		</motion.section>
	)
}
