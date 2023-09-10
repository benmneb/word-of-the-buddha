import ElaborationTree from '@/app/[lang]/[truth]/_components/elaboration-tree'
import Explanation from '@/app/[lang]/[truth]/_components/explanation'
import { Truths } from '@/app/[lang]/[truth]/_data/types'
import { colours } from '@/app/[lang]/_styles/colours'
import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
	params: { truth: Truths; lang: Locale }
}

export async function generateStaticParams({ params: { lang } }: Props) {
	return Object.keys(Truths).map((truth) => ({ truth, lang }))
}

export default async function TruthLayout({ children, params }: Props) {
	const dictionary = await getDictionary(params.lang)

	return (
		<main
			className="flex flex-col flex-grow"
			style={{ backgroundColor: colours[params.truth] }}
		>
			<section className="flex justify-between">
				<article className="ml-4 mt-3 w-2/3 p-4 pb-2 max-w-prose">
					<Explanation {...params} />
				</article>
				<div className="w-1/3">{dictionary.video.watchVideo}</div>
			</section>
			<section className="flex flex-grow">
				<nav className="bg-tree w-[60%] p-4 pl-8 block rounded-tr-3xl">
					<ElaborationTree {...params} />
				</nav>
				<aside className="w-[40%]">{children}</aside>
			</section>
		</main>
	)
}
