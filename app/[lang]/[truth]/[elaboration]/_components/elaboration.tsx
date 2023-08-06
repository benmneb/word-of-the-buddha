import { componentMap } from '@/app/[lang]/[truth]/[elaboration]/_data/component-map'
import { ElaborationSubjects } from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import { Locale } from '@/i18n.config'

interface Props {
	elaboration: ElaborationSubjects
	lang: Locale
}

export default function Elaboration({ elaboration, lang }: Props) {
	const appropriateElaboration =
		componentMap?.[lang]?.[elaboration] || componentMap?.['en']?.[elaboration]

	if (!appropriateElaboration) return 'throw OMG'

	return appropriateElaboration
}
