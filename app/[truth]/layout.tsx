import ElaborationTree from '@/app/[truth]/_components/elaboration-tree'
import Explanation from '@/app/[truth]/_components/explanation'
import { Truths } from '@/app/[truth]/_data/types'
import { ReactNode } from 'react'

export default function TruthLayout({
	children,
	params,
}: {
	children: ReactNode
	params: { truth: Truths }
}) {
	return (
		<main className="bg-blue-400">
			<section className="flex justify-between">
				<article className="w-2/3">
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
