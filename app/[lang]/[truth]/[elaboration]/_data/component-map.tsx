import {
	ElaborationSubjects,
	OriginTreeType,
	SufferingTreeType,
} from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import Form from '@/content/en/1-suffering/1-five-components/1-form/form.mdx'
import Experience from '@/content/en/1-suffering/1-five-components/2-experience/experience.mdx'
import FiveComponents from '@/content/en/1-suffering/1-five-components/five-components.mdx'
import OriginOfWanting from '@/content/en/2-origin/1-origin-of-wanting/origin-of-wanting.mdx'
import DependentOrigination from '@/content/en/2-origin/2-dependent-origination/dependent-origination.mdx'
import DutchForm from '@/content/nl/1-suffering/1-five-components/1-form/form.mdx'
import DutchExperience from '@/content/nl/1-suffering/1-five-components/2-experience/experience.mdx'
import DutchFiveComponents from '@/content/nl/1-suffering/1-five-components/five-components.mdx'
import DutchOriginOfWanting from '@/content/nl/2-origin/1-origin-of-wanting/origin-of-wanting.mdx'
import DutchDependentOrigination from '@/content/nl/2-origin/2-dependent-origination/dependent-origination.mdx'
import { Locale } from '@/i18n.config'
import { ReactNode } from 'react'

const englishSufferingComponents: Record<SufferingTreeType, ReactNode> = {
	khandas: <FiveComponents />,
	form: <Form />,
	experience: <Experience />,
	'three-characteristics': <Experience />,
}

const englishOriginComponents: Record<OriginTreeType, ReactNode> = {
	origin: <OriginOfWanting />,
	'dependent-origination': <DependentOrigination />,
}

const dutchSufferingComponents: Record<SufferingTreeType, ReactNode> = {
	khandas: <DutchFiveComponents />,
	form: <DutchForm />,
	experience: <DutchExperience />,
	'three-characteristics': <DutchExperience />,
}

const dutchOriginComponents: Record<OriginTreeType, ReactNode> = {
	origin: <DutchOriginOfWanting />,
	'dependent-origination': <DutchDependentOrigination />,
}

const englishComponents: Record<ElaborationSubjects, ReactNode> = {
	...englishSufferingComponents,
	...englishOriginComponents,
}

const dutchComponents: Record<ElaborationSubjects, ReactNode> = {
	...dutchSufferingComponents,
	...dutchOriginComponents,
}

export const componentMap: Record<
	Locale,
	Record<ElaborationSubjects, ReactNode>
> = {
	en: englishComponents,
	nl: dutchComponents,
}
