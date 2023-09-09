'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

interface TreeListItemWrapperProps extends PropsWithChildren {
	path: any
	url: any
}

export default function TreeListItemWrapper({
	path,
	url,
	children,
}: TreeListItemWrapperProps) {
	const pathname = usePathname()

	return (
		<motion.li
			key={path}
			className="my-1"
			initial={false}
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
		</motion.li>
	)
}
