import { ElaborationTreeProps } from '@/app/[lang]/[truth]/_components/elaboration-tree'
import TreeListItemWrapper from '@/app/[lang]/[truth]/_components/tree-list-item-wrapper'
import { TreeType } from '@/app/[lang]/[truth]/_data/elaboration-tree'
import { getDictionary } from '@/i18n/get-dictionary'

interface TreeListProps extends ElaborationTreeProps {
	seed: TreeType[]
}

export default async function TreeList({ seed, truth, lang }: TreeListProps) {
	const dictionary = await getDictionary(lang)

	return seed.map(({ i18nkey, path, children }) => {
		// @ts-ignore: Allowing type inference is legit AF but Typescript also complains its too loose sometimes
		const relevantText = dictionary.truths[truth].elaborationTree[i18nkey]
		const url = `/${lang}/${path}`

		return (
			<>
				<TreeListItemWrapper path={path} url={url}>
					<span className="relative z-10">{relevantText}</span>
				</TreeListItemWrapper>
				{children && (
					<ul className="ml-4">
						<TreeList seed={children} truth={truth} lang={lang} />
					</ul>
				)}
			</>
		)
	})
}
