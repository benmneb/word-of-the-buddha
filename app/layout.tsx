import type { Metadata } from 'next'
import { Lemon } from 'next/font/google'
import Link from 'next/link'
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
	viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#cdb4db" />
				<meta name="apple-mobile-web-app-title" content="Word of the Buddha" />
				<meta name="application-name" content="Word of the Buddha" />
				<meta name="msapplication-TileColor" content="#cdb4db" />
				<meta name="theme-color" content="#cdb4db" />
			</head>
			<body className={font.className}>
				<nav className="text-lg bg-purple-400 flex h-24 gap-4">
					<div className="">
						<Link href="/suffering">Suffering</Link>
					</div>
					<div className="">
						<Link href="/cause">Cause</Link>
					</div>
					<div className="">
						<Link href="/cessation">Cessation</Link>
					</div>
					<div className="">
						<Link href="/the-way">The Way</Link>
					</div>
				</nav>
				{children}
				<footer className="bg-blue-900">this is the footer etc</footer>
			</body>
		</html>
	)
}
