import {
	ElaborationSubjects,
	OriginTreeType,
	SufferingTreeType,
} from '@/app/[truth]/[elaboration]/_data/types'
import Form from '@/content/1-suffering/1-five-components/1-form/form.mdx'
import Experience from '@/content/1-suffering/1-five-components/2-experience/experience.mdx'
import FiveComponents from '@/content/1-suffering/1-five-components/five-components.mdx'
import OriginOfWanting from '@/content/2-origin/1-origin-of-wanting/origin-of-wanting.mdx'
import DependentOrigination from '@/content/2-origin/2-dependent-origination/dependent-origination.mdx'
import { ReactNode } from 'react'

const sufferingEnumToComponent: Record<SufferingTreeType, ReactNode> = {
	[SufferingTreeType['khandas']]: <FiveComponents />,
	[SufferingTreeType['form']]: <Form />,
	[SufferingTreeType['experience']]: <Experience />,
	[SufferingTreeType['three-characteristics']]: <Experience />,
}

const originEnumToComponent: Record<OriginTreeType, ReactNode> = {
	[OriginTreeType['origin']]: <OriginOfWanting />,
	[OriginTreeType['dependent-origination']]: <DependentOrigination />,
}

export const enumsToComponents: Record<ElaborationSubjects, ReactNode> = {
	...sufferingEnumToComponent,
	...originEnumToComponent,
}
