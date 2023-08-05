import type { Metadata } from 'next'
import { Lemon } from 'next/font/google'
import './globals.css'

const font = Lemon({
	weight: '400',
	display: 'swap',
	preload: true,
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Word of the Buddha',
	description: 'TODO',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	)
}
