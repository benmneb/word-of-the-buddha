import { Truths } from '@/app/[lang]/[truth]/_data/types'
import TruthsNavItem from '@/app/[lang]/_components/truths-nav-item'
import TruthsNavItemWrapper from '@/app/[lang]/_components/truths-nav-item-wrapper'
import { Locale } from '@/i18n/config'

interface Props {
	params: { lang: Locale }
}

export default function TruthsNav({ params }: Props) {
	return (
		<nav className="text-lg bg-purple-400 flex justify-evenly h-36">
			{Object.values(Truths).map((truth) => (
				<TruthsNavItemWrapper key={truth} truth={truth}>
					<TruthsNavItem lang={params.lang} truth={truth} />
				</TruthsNavItemWrapper>
			))}
		</nav>
	)
}
