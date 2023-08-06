'use client'

import { i18n } from '@/i18n/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
	text: string
}

export default function LocaleSelector({ text }: Props) {
	const pathName = usePathname()

	function redirectedPathName(locale: string) {
		if (!pathName) return '/'
		const segments = pathName.split('/')
		segments[1] = locale
		return segments.join('/')
	}

	return (
		<div>
			<p>{text}</p>
			<ul>
				{i18n.locales.map((locale) => {
					return (
						<li key={locale}>
							<Link href={redirectedPathName(locale)}>{locale}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
