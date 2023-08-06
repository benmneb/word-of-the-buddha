import { componentMap } from '@/app/[lang]/[truth]/_data/component-map'
import { Truths } from '@/app/[lang]/[truth]/_data/types'
import { Locale } from '@/i18n.config'

interface Props {
	truth: Truths
	lang: Locale
}

export default function Explanation({ truth, lang }: Props) {
	const appropriateTruth =
		componentMap?.[lang]?.[truth] || componentMap?.['en']?.[truth]

	if (!appropriateTruth) return 'throw WOT'

	return appropriateTruth
}
