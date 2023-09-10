import { ElaborationTreeProps } from '@/app/[lang]/[truth]/_components/elaboration-tree'
import TreeListItemContentWrapper from '@/app/[lang]/[truth]/_components/tree-list-item-content-wrapper'
import TreeListItemWrapper from '@/app/[lang]/[truth]/_components/tree-list-item-wrapper'
import TreeListWrapper from '@/app/[lang]/[truth]/_components/tree-list-wrapper'
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
			<TreeListItemWrapper key={url} url={url}>
				<TreeListItemContentWrapper path={path} url={url}>
					<span className="relative z-10">{relevantText}</span>
				</TreeListItemContentWrapper>
				{children && (
					<TreeListWrapper className="ml-4">
						<TreeList seed={children} truth={truth} lang={lang} />
					</TreeListWrapper>
				)}
			</TreeListItemWrapper>
		)
	})
}
