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
	const isActive = pathname === url

	return (
		<motion.div
			key={path}
			initial={false}
			variants={item}
			animate={{
				color: isActive ? '#4F518C' : '#FFF', // bg-tree
				transition: { delay: isActive ? 0.15 : 0 },
			}}
		>
			<Link href={url} className="relative py-2 pr-2">
				{isActive && (
					<motion.span
						layoutId="active-item"
						className="absolute inset-0 pl-24 -left-24 -right-2 bg-treeHighlight z-0"
						style={{
							borderTopRightRadius: 100,
							borderBottomRightRadius: 100,
						}}
					/>
				)}
				{children}
			</Link>
		</motion.div>
	)
}
