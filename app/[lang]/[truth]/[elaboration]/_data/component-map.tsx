import {
	ElaborationSubjects,
	OriginTreeType,
	SufferingTreeType,
} from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import Form from '@/content/1-suffering/1-five-components/1-form/index.en.mdx'
import DutchForm from '@/content/1-suffering/1-five-components/1-form/index.nl.mdx'
import Experience from '@/content/1-suffering/1-five-components/2-experience/index.en.mdx'
import DutchExperience from '@/content/1-suffering/1-five-components/2-experience/index.nl.mdx'
import FiveComponents from '@/content/1-suffering/1-five-components/index.en.mdx'
import DutchFiveComponents from '@/content/1-suffering/1-five-components/index.nl.mdx'
import OriginOfWanting from '@/content/2-origin/1-origin-of-wanting/index.en.mdx'
import DutchOriginOfWanting from '@/content/2-origin/1-origin-of-wanting/index.nl.mdx'
import DependentOrigination from '@/content/2-origin/2-dependent-origination/index.en.mdx'
import DutchDependentOrigination from '@/content/2-origin/2-dependent-origination/index.nl.mdx'
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
