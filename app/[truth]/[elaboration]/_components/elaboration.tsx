import { enumsToComponents } from '@/app/[truth]/[elaboration]/_data/enumsToComponents'
import { ElaborationSubjects } from '@/app/[truth]/[elaboration]/_data/types'

interface Props {
	subject: ElaborationSubjects
}

export default function Elaboration({ subject }: Props) {
	const appropriateElaboration = enumsToComponents?.[subject]

	if (!appropriateElaboration) return 'throw OMG'

	return enumsToComponents[subject]
}
