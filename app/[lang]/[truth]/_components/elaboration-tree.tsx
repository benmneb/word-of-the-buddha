import TreeList from '@/app/[lang]/[truth]/_components/tree-list'
import { elaborationTree } from '@/app/[lang]/[truth]/_data/elaboration-tree'
import { Truths } from '@/app/[lang]/[truth]/_data/types'
import { Locale } from '@/i18n/config'

export interface ElaborationTreeProps {
	truth: Truths
	lang: Locale
}

export default function ElaborationTree(props: ElaborationTreeProps) {
	const appropriateData = elaborationTree?.[props.truth]

	if (!appropriateData) return 'throw WTF'

	return (
		<ul className="sticky top-4">
			<TreeList seed={appropriateData} {...props} />
		</ul>
	)
}
