import { Truths } from '@/app/[truth]/_data/types'
import Suffering from '@/content/1-suffering/suffering.mdx'
import Origin from '@/content/2-origin/origin.mdx'
import { ReactNode } from 'react'

export const enumsToComponents: Record<Truths, ReactNode> = {
	[Truths['suffering']]: <Suffering />,
	[Truths['origin']]: <Origin />,
	[Truths['cessation']]: <Origin />,
	[Truths['the-way']]: <Origin />,
}
