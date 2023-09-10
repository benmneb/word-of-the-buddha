'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

interface TestProps extends PropsWithChildren {
	url: string
}

const item = {
	hidden: { opacity: 0, y: -16 },
	show: { opacity: 1, y: 0 },
}

export default function TreeListItemWrapper({ url, children }: TestProps) {
	return (
		<motion.li key={url} variants={item} className="my-3">
			{children}
		</motion.li>
	)
}
