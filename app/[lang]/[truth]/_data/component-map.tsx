import { Truths } from '@/app/[lang]/[truth]/_data/types'
import Suffering from '@/content/1-suffering/suffering.en.mdx'
import DutchSuffering from '@/content/1-suffering/suffering.nl.mdx'
import Origin from '@/content/2-origin/origin.en.mdx'
import DutchOrigin from '@/content/2-origin/origin.nl.mdx'
import { Locale } from '@/i18n/config'
import { ReactNode } from 'react'

const englishComponents: Record<Truths, ReactNode> = {
	[Truths['suffering']]: <Suffering />,
	[Truths['origin']]: <Origin />,
	[Truths['cessation']]: <Origin />,
	[Truths['the-way']]: <Origin />,
}

const dutchComponents: Record<Truths, ReactNode> = {
	[Truths['suffering']]: <DutchSuffering />,
	[Truths['origin']]: <DutchOrigin />,
	[Truths['cessation']]: <DutchOrigin />,
	[Truths['the-way']]: <DutchOrigin />,
}

export const componentMap: Record<Locale, Record<Truths, ReactNode>> = {
	en: englishComponents,
	nl: dutchComponents,
}
