import ElaborationTree from '@/app/[lang]/[truth]/_components/elaboration-tree'
import Explanation from '@/app/[lang]/[truth]/_components/explanation'
import { Truths } from '@/app/[lang]/[truth]/_data/types'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n.config'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
	params: { truth: Truths; lang: Locale }
}

export default async function TruthLayout({ children, params }: Props) {
	const dictionary = await getDictionary(params.lang)

	return (
		<main className="bg-blue-400">
			<section className="flex justify-between">
				<article className="w-2/3">
					<Explanation {...params} />
				</article>
				<div className="w-1/3">{dictionary.video.watchVideo}</div>
			</section>
			<section className="flex">
				<nav className="bg-blue-600 w-2/3">
					<ElaborationTree {...params} />
				</nav>
				<aside className="w-1/3">{children}</aside>
			</section>
		</main>
	)
}
