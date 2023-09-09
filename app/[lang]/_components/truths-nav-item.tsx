import { Truths } from '@/app/[lang]/[truth]/_data/types'
import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import Link from 'next/link'

interface Props {
	lang: Locale
	truth: Truths
}

export default async function TruthsNavItem({ lang, truth }: Props) {
	const dictionary = await getDictionary(lang)

	return (
		<Link
			href={`/${lang}/${truth}`}
			className="w-full h-full flex items-center justify-center"
		>
			{dictionary.truths[truth].title.short}
		</Link>
	)
}
