import LocaleSelector from '@/app/[lang]/_components/locale-selector'
import TruthsNav from '@/app/[lang]/_components/truths-nav'
import { Locale, i18n } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import type { Metadata } from 'next'
import { Lemon } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './globals.css'

const font = Lemon({
	weight: '400',
	display: 'swap',
	preload: true,
	subsets: ['latin'],
})

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

export default async function RootLayout({ children, params }: Props) {
	const dictionary = await getDictionary(params.lang)

	return (
		<html lang={params.lang}>
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
			<body className={`${font.className} min-h-screen flex flex-col`}>
				<TruthsNav params={params} />
				{children}
				<footer className="bg-blue-900 text-gray-200 w-full flex justify-between">
					<section>{dictionary.footer.attribution}</section>
					<section>
						<LocaleSelector text={dictionary.footer.changeLanguage} />
					</section>
				</footer>
			</body>
		</html>
	)
}
