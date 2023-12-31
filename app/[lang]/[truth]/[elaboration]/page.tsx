import Elaboration from '@/app/[lang]/[truth]/[elaboration]/_components/elaboration'
import ElaborationWrapper from '@/app/[lang]/[truth]/[elaboration]/_components/wrapper'
import {
	ElaborationSubjects,
	ElaborationSubjectsMap,
} from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import { Truths } from '@/app/[lang]/[truth]/_data/types'
import { Locale } from '@/i18n/config'

interface Props {
	params: { elaboration: ElaborationSubjects; lang: Locale; truth: Truths }
}

export async function generateStaticParams({ params: { lang, truth } }: Props) {
	return Object.keys(ElaborationSubjectsMap[truth]).map((elaboration) => ({
		elaboration,
		lang,
	}))
}

export default function ElaborationPage({ params }: Props) {
	return (
		<ElaborationWrapper>
			<Elaboration {...params} />
		</ElaborationWrapper>
	)
}
