import { Truths } from '@/app/[lang]/[truth]/_data/types'
import Suffering from '@/content/1-suffering/index.en.mdx'
import DutchSuffering from '@/content/1-suffering/index.nl.mdx'
import Origin from '@/content/2-origin/index.en.mdx'
import DutchOrigin from '@/content/2-origin/index.nl.mdx'
import { Locale } from '@/i18n/config'

const englishComponents: Record<Truths, JSX.Element> = {
	[Truths['suffering']]: <Suffering />,
	[Truths['origin']]: <Origin />,
	[Truths['cessation']]: <Origin />,
	[Truths['the-way']]: <Origin />,
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
