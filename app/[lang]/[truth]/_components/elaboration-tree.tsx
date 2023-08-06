import {
	TreeType,
	elaborationTree,
} from '@/app/[lang]/[truth]/_data/elaboration-tree'
import { Truths } from '@/app/[lang]/[truth]/_data/types'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n.config'
import Link from 'next/link'

interface Props {
	truth: Truths
	lang: Locale
}

export default function ElaborationTree(props: Props) {
	const appropriateData = elaborationTree?.[props.truth]

	if (!appropriateData) return 'throw WTF'

	return (
		<ul>
			<TreeList seed={appropriateData} {...props} />
		</ul>
	)
}

interface TreeListProps extends Props {
	seed: TreeType[]
}

async function TreeList({ seed, truth, lang }: TreeListProps) {
	const dictionary = await getDictionary(lang)

	return seed.map(({ i18nkey, path, children }) => {
		const relevantText = dictionary[truth].elaborationTree[i18nkey]

		return (
			<>
				<li key={path}>
					<Link href={path}>{relevantText}</Link>
				</li>
				{children && (
					<ul className="ml-4">
						<TreeList seed={children} truth={truth} lang={lang} />
					</ul>
				)}
			</>
		)
	})
}
