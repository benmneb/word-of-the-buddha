import {
	TreeType,
	elaborationTreeData,
} from '@/app/[lang]/[truth]/_data/elaboration-tree'
import { Truths } from '@/app/[lang]/[truth]/_data/types'
import Link from 'next/link'

interface Props {
	truth: Truths
}

export default function ElaborationTree({ truth }: Props) {
	const appropriateData = elaborationTreeData?.[truth]

	if (!appropriateData) return 'throw WTF'

	return (
		<ul>
			<TreeList seed={appropriateData} />
		</ul>
	)
}

interface TreeListProps {
	seed: TreeType[]
}

function TreeList({ seed }: TreeListProps) {
	return seed.map(({ text, path, children }) => {
		return (
			<>
				<li key={path}>
					<Link href={path}>{text}</Link>
				</li>
				{children && (
					<ul className="ml-4">
						<TreeList seed={children} />
					</ul>
				)}
			</>
		)
	})
}
