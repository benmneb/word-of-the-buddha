import ElaborationTree from '@/app/[lang]/[truth]/_components/elaboration-tree'
import Explanation from '@/app/[lang]/[truth]/_components/explanation'
import { Truths } from '@/app/[lang]/[truth]/_data/types'
import { Locale } from '@/i18n.config'
import { ReactNode } from 'react'

export default function TruthLayout({
	children,
	params,
}: {
	children: ReactNode
	params: { truth: Truths; lang: Locale }
}) {
	return (
		<main className="bg-blue-400">
			<section className="flex justify-between">
				<article className="w-2/3">
					<p>Current locale: {params.lang}</p>
					<Explanation {...params} />
				</article>
				<div className="w-1/3">video!!1</div>
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
