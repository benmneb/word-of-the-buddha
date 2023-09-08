import {
	ElaborationSubjects,
	OriginTreeType,
	SufferingTreeType,
} from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import Form from '@/content/1-suffering/1-five-components/1-form/form.en.mdx'
import DutchForm from '@/content/1-suffering/1-five-components/1-form/form.nl.mdx'
import Experience from '@/content/1-suffering/1-five-components/2-experience/experience.en.mdx'
import DutchExperience from '@/content/1-suffering/1-five-components/2-experience/experience.nl.mdx'
import FiveComponents from '@/content/1-suffering/1-five-components/five-components.en.mdx'
import DutchFiveComponents from '@/content/1-suffering/1-five-components/five-components.nl.mdx'
import OriginOfWanting from '@/content/2-origin/1-origin-of-wanting/origin-of-wanting.en.mdx'
import DutchOriginOfWanting from '@/content/2-origin/1-origin-of-wanting/origin-of-wanting.nl.mdx'
import DependentOrigination from '@/content/2-origin/2-dependent-origination/dependent-origination.en.mdx'
import DutchDependentOrigination from '@/content/2-origin/2-dependent-origination/dependent-origination.nl.mdx'
import { Locale } from '@/i18n/config'
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
