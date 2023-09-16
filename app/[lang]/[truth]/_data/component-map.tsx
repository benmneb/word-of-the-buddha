import { Truths } from '@/app/[lang]/[truth]/_data/types'
import Suffering from '@/content/1-suffering/index.en.mdx'
import DutchSuffering from '@/content/1-suffering/index.nl.mdx'
import Origin from '@/content/2-origin/index.en.mdx'
import DutchOrigin from '@/content/2-origin/index.nl.mdx'
import Cessation from '@/content/3-cessation/index.en.mdx'
import TheWay from '@/content/4-the-way/index.en.mdx'
import { Locale } from '@/i18n/config'

const englishComponents: Record<Truths, JSX.Element> = {
	[Truths['suffering']]: <Suffering />,
	[Truths['origin']]: <Origin />,
	[Truths['cessation']]: <Cessation />,
	[Truths['the-way']]: <TheWay />,
}

const dutchComponents: Record<Truths, JSX.Element> = {
	[Truths['suffering']]: <DutchSuffering />,
	[Truths['origin']]: <DutchOrigin />,
	[Truths['cessation']]: <DutchOrigin />,
	[Truths['the-way']]: <DutchOrigin />,
}

export const componentMap: Record<Locale, Record<Truths, JSX.Element>> = {
	en: englishComponents,
	nl: dutchComponents,
}
