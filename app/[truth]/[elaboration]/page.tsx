import Elaboration from '@/app/[truth]/[elaboration]/_components/elaboration'
import { ElaborationSubjects } from '@/app/[truth]/[elaboration]/_data/types'

interface Props {
	params: { elaboration: ElaborationSubjects }
}

export default function ElaborationPage({ params }: Props) {
	return (
		<section className="bg-violet-300 h-full">
			<article className="">
				<Elaboration subject={params.elaboration} />
			</article>
		</section>
	)
}
