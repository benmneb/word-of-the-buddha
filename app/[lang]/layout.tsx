import LocaleSelector from '@/app/[lang]/_components/locale-selector'
import { Locale, i18n } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
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
	description:
		'An outline of the Teachings of the Buddha in the Words of the Pali Canon.',
}

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }))
}

interface Props {
	children: React.ReactNode
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
			<body className={font.className}>
				<nav className="text-lg bg-purple-400 flex h-24 gap-4">
					<div className="">
						<Link href="/suffering">
							{dictionary.truths.suffering.title.short}
						</Link>
					</div>
					<div className="">
						<Link href="/origin">{dictionary.truths.origin.title.short}</Link>
					</div>
					<div className="">
						<Link href="/cessation">
							{dictionary.truths.cessation.title.short}
						</Link>
					</div>
					<div className="">
						<Link href="/the-way">
							{dictionary.truths['the-way'].title.short}
						</Link>
					</div>
				</nav>
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
