'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

interface TreeListItemWrapperProps extends PropsWithChildren {
	path: any
	url: any
}

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
}

export default function TreeListItemContentWrapper({
	path,
	url,
	children,
}: TreeListItemWrapperProps) {
	const pathname = usePathname()

	return (
		<motion.div
			key={path}
			className="my-1"
			initial={false}
			variants={item}
			animate={{
				// TODO: How to use Tailwind values outside of classes?
				marginTop: pathname === url ? '0.5rem' : '0rem',
				marginBottom: pathname === url ? '0.5rem' : '0rem',
			}}
			transition={{ duration: 0.3 }}
		>
			<Link href={url} className="relative p-2">
				{pathname === url && (
					<motion.span
						layoutId="active-item"
						className="absolute inset-0 pl-16 -left-16 -right-2 rounded-r-full bg-red-200 z-0"
					/>
				)}
				{children}
			</Link>
		</motion.div>
	)
}
