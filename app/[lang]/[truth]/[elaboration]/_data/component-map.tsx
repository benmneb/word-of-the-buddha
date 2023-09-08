import {
	ElaborationSubjects,
	OriginTreeType,
	SufferingTreeType,
} from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import Form from '@/content/1-suffering/1-five-components/1-form/index.en.mdx'
import DutchForm from '@/content/1-suffering/1-five-components/1-form/index.nl.mdx'
import Experience from '@/content/1-suffering/1-five-components/2-experience/index.en.mdx'
import DutchExperience from '@/content/1-suffering/1-five-components/2-experience/index.nl.mdx'
import Perception from '@/content/1-suffering/1-five-components/3-perception/index.en.mdx'
import Will from '@/content/1-suffering/1-five-components/4-will/index.en.mdx'
import DOConsciousnesses from '@/content/1-suffering/1-five-components/5-consciousnesses/1-dOConsciousnesses/index.en.mdx'
import Sankhara from '@/content/1-suffering/1-five-components/5-consciousnesses/2-sankhara/index.en.mdx'
import DepOfConsciousnesses from '@/content/1-suffering/1-five-components/5-consciousnesses/3-dependency-of-consciousnesses/index.en.mdx'
import Consciousnesses from '@/content/1-suffering/1-five-components/5-consciousnesses/index.en.mdx'
import FiveComponents from '@/content/1-suffering/1-five-components/index.en.mdx'
import DutchFiveComponents from '@/content/1-suffering/1-five-components/index.nl.mdx'
import ThreeCharacteristics from '@/content/1-suffering/2-three-characteristics/index.en.mdx'
import Anatta from '@/content/1-suffering/3-anatta/index.en.mdx'
import ThreeWarnings from '@/content/1-suffering/4-three-warnings/index.en.mdx'
import Samsara from '@/content/1-suffering/5-samsara/index.en.mdx'
import OriginOfWanting from '@/content/2-origin/1-origin-of-wanting/index.en.mdx'
import DutchOriginOfWanting from '@/content/2-origin/1-origin-of-wanting/index.nl.mdx'
import DependentOrigination from '@/content/2-origin/2-dependent-origination/index.en.mdx'
import DutchDependentOrigination from '@/content/2-origin/2-dependent-origination/index.nl.mdx'
import { Locale } from '@/i18n/config'

const englishSufferingComponents: Record<SufferingTreeType, JSX.Element> = {
	khandas: <FiveComponents />,
	form: <Form />,
	experience: <Experience />,
	perception: <Perception />,
	will: <Will />,
	consciousnesses: <Consciousnesses />,
	'dependent-origination-of-consciousnesses': <DOConsciousnesses />,
	sankhara: <Sankhara />,
	'dependency-of-consciousnesses': <DepOfConsciousnesses />,
	'three-characteristics': <ThreeCharacteristics />,
	anatta: <Anatta />,
	'three-warnings': <ThreeWarnings />,
	samsara: <Samsara />,
}

const englishOriginComponents: Record<OriginTreeType, JSX.Element> = {
	origin: <OriginOfWanting />,
	'dependent-origination': <DependentOrigination />,
}

const dutchSufferingComponents: Partial<
	Record<SufferingTreeType, JSX.Element>
> = {
	khandas: <DutchFiveComponents />,
	form: <DutchForm />,
	experience: <DutchExperience />,
	'three-characteristics': <DutchExperience />,
}

const dutchOriginComponents: Record<OriginTreeType, JSX.Element> = {
	origin: <DutchOriginOfWanting />,
	'dependent-origination': <DutchDependentOrigination />,
}

const englishComponents: Record<ElaborationSubjects, JSX.Element> = {
	...englishSufferingComponents,
	...englishOriginComponents,
}

// Anything other than English can be Partial<...>
const dutchComponents: Partial<Record<ElaborationSubjects, JSX.Element>> = {
	...dutchSufferingComponents,
	...dutchOriginComponents,
}

export const componentMap: Record<
	Locale,
	Record<ElaborationSubjects, JSX.Element>
> = {
	en: englishComponents,
	nl: dutchComponents,
}
