import Elaboration from '@/app/[lang]/[truth]/[elaboration]/_components/elaboration'
import { ElaborationSubjects } from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import { Locale } from '@/i18n.config'

interface Props {
	params: { elaboration: ElaborationSubjects; lang: Locale }
}

export default function ElaborationPage({ params }: Props) {
	return (
		<section className="bg-violet-300 h-full">
			<article className="">
				<Elaboration {...params} />
			</article>
		</section>
	)
}
