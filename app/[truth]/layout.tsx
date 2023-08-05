import Link from 'next/link'
import { ReactNode } from 'react'

export default function TruthLayout({
	children,
	params,
}: {
	children: ReactNode
	params: { truth: string }
}) {
	return (
		<main className="bg-blue-400">
			<section className="flex justify-between">
				<article>The Noble Truth of {params.truth}</article>
				<div>video!!1</div>
			</section>
			<section className="flex">
				<nav className="bg-blue-600 w-2/3">
					<ul>
						<li>
							<Link href={`/${params.truth}/khandas`}>Five khandas</Link>
						</li>
						<li>
							<Link href={`/${params.truth}/three-characteristics`}>
								Three characteristics
							</Link>
						</li>
						<li>
							<Link href={`/${params.truth}/samsara`}>Samsara</Link>
						</li>
					</ul>
				</nav>
				<aside className="w-1/3">{children}</aside>
			</section>
		</main>
	)
}
