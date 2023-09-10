import Footer from '@/app/[lang]/_components/footer'
import TruthsNav from '@/app/[lang]/_components/truths-nav'
import { fasthand, lemon, nunito } from '@/app/[lang]/_styles/fonts'
import { Locale, i18n } from '@/i18n/config'
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import './globals.css'

export const metadata: Metadata = {
	title: 'Word of the Buddha',
	description:
		'An outline of the Teachings of the Buddha in the Words of the Pali Canon.',
}

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }))
}

interface Props extends PropsWithChildren {
	params: { lang: Locale }
}

export default function RootLayout({ children, params }: Props) {
	return (
		<html
			lang={params.lang}
			className={`${nunito.variable} ${lemon.variable} ${fasthand.variable}`}
		>
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
				<script
					async
					src="https://umamalytics.vercel.app/script.js"
					data-website-id="8aa4e5c6-9b71-4c68-8da5-096daa3ea927"
					data-domains="wordofthebuddha.com"
				></script>
			</head>
			<body className={`font-nunito min-h-screen flex flex-col`}>
				<TruthsNav params={params} />
				{children}
				<Footer lang={params.lang} />
			</body>
		</html>
	)
}
