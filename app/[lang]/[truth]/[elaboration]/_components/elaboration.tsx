import { componentMap } from '@/app/[lang]/[truth]/[elaboration]/_data/component-map'
import { ElaborationSubjects } from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import { Truths } from '@/app/[lang]/[truth]/_data/types'
import { Locale, i18n } from '@/i18n/config'

interface Props {
	elaboration: ElaborationSubjects
	lang: Locale
	truth: Truths
}

export default function Elaboration({ elaboration, lang, truth }: Props) {
	const appropriateElaboration =
		componentMap?.[lang]?.[truth]?.[elaboration] ||
		componentMap?.[i18n.defaultLocale]?.[truth]?.[elaboration]

	if (!appropriateElaboration) return 'throw OMG'

	return appropriateElaboration
}
