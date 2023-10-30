import {
	CessationTreeType,
	ElaborationSubjects,
	OriginTreeType,
	SufferingTreeType,
	TheWayTreeType,
} from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import { Truths } from '@/app/[lang]/[truth]/_data/types'
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
import DependentOrigination from '@/content/2-origin/2-dependent-origination/index.en.mdx'
import PresentKamma from '@/content/2-origin/3-kamma/1-present-kamma/index.en.mdx'
import FutureKamma from '@/content/2-origin/3-kamma/2-future-kamma/index.en.mdx'
import KammaAsVolition from '@/content/2-origin/3-kamma/3-kamma-as-volition/index.en.mdx'
import InheritanceOfDeeds from '@/content/2-origin/3-kamma/4-inheritance-of-deeds/index.en.mdx'
import Kamma from '@/content/2-origin/3-kamma/index.en.mdx'
import DependentCessation from '@/content/3-cessation/1-dependent-cessation/index.en.mdx'
import NibbanaWithResidue from '@/content/3-cessation/2-nibbana-with-residue/index.en.mdx'
import TheArahant from '@/content/3-cessation/3-the-arahant/index.en.mdx'
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
	'three-characteristics-of-existence': <ThreeCharacteristics />,
	anatta: <Anatta />,
	'three-warnings': <ThreeWarnings />,
	samsara: <Samsara />,
}

const englishOriginComponents: Record<OriginTreeType, JSX.Element> = {
	origin: <OriginOfWanting />,
	'dependent-origination-of-all-phenomena': <DependentOrigination />,
	kamma: <Kamma />,
	'present-kamma': <PresentKamma />,
	'future-kamma': <FutureKamma />,
	'kamma-as-volition': <KammaAsVolition />,
	'inheritance-of-deeds': <InheritanceOfDeeds />,
}

const englishCessationComponents: Record<CessationTreeType, JSX.Element> = {
	'dependent-cessation': <DependentCessation />,
	'nibbana-with-residue': <NibbanaWithResidue />,
	'the-arahant': <TheArahant />,
}

const englishTheWayComponents: Record<TheWayTreeType, JSX.Element> = {
	'right-view': <div />,
	'wrong-view': <div />,
	'the-four-noble-truths': <div />,
	'the-good-and-the-bad': <div />,
	'right-view-regarding-five-components-of-existence': <div />,
	'unprofitable-questions': <div />,
	'five-basic-fetters': <div />,
	'unwise-contemplations': <div />,
	'six-views-about-the-soul': <div />,
	'two-extremes-and-middle-doctrine': <div />,
	'the-soul': <div />,
	'wise-contemplations': <div />,
	'stream-enterer': <div />,
	'causes-for-arising-of-right-view-of-stream-winning': <div />,
	'view-of-permanent-essence': <div />,
	'words-of-another': <div />,
	water_simile: <div />,
	jhananagami: <div />,
	'scent-of-i-am': <div />,
	'free-from-speculative-views': <div />,
	'three-characteristics': <div />,
	'dependent-origination': <div />,
	// 2
	'right-motivation': <div />,
	// 3
	'right-speech': <div />,
	lying: <div />,
	'malicious-gossip': <div />,
	'harsh-speech': <div />,
	'useless-chatter': <div />,
	'right-way-to-criticise': <div />,
	// 4
	'right-action': <div />,
	// 5
	'right-livelihood': <div />,
	// 6,
	'right-endeavour': <div />,
	'endeavour-of-restraint': <div />,
	'endeavour-to-abandon': <div />,
	'endeavour-to-develop': <div />,
	'endeavour-to-maintain': <div />,
	// 7
	'right-mindfulness': <div />,
	'four-focuses-of-mindfulness': <div />,
	'mindfulness-of-body': <div />,
	'mindfulness-of-breathing': <div />,
	'four-postures': <div />,
	'full-comprehension-of-purpose': <div />,
	'bodily-parts': <div />,
	elements: <div />,
	'charnel-ground-contemplations': <div />,
	'benefits-of-mindfulness-of-body': <div />,
	'arising-and-passing-away': <div />,
	'mindfulness-of-experience': <div />,
	'mindfulness-of-the-mind': <div />,
	'mindfulness-of-mind-objects': <div />,
	'five-hindrances': <div />,
	'seven-enlightenment-factors': <div />,
	'five-components-of-experience': <div />,
	'six-sense-bases': <div />,
	'four-noble-truths': <div />,
	'summary-of-mind-objects': <div />,
	'summary-of-satipatthana': <div />,
	'nibbana-through-anapanasati': <div />,
	'breathing-completes-mindfulness': <div />,
	'mindfulness-completes-enlightenment-factors': <div />,
	// 8
	'right-stillness': <div />,
	'four-jhanas': <div />,
	//
	'summing-up-the-path': <div />,
	nibbana: <div />,
	'the-true-goal': <div />,
}

const dutchSufferingComponents: Partial<
	Record<SufferingTreeType, JSX.Element>
> = {
	khandas: <DutchFiveComponents />,
	form: <DutchForm />,
	experience: <DutchExperience />,
	'three-characteristics-of-existence': <DutchExperience />,
}

// const dutchOriginComponents: Record<OriginTreeType, JSX.Element> = {
// 	origin: <DutchOriginOfWanting />,
// 	'dependent-origination': <DutchDependentOrigination />,
// }

type ComponentMapType = Record<
	Truths,
	Partial<Record<ElaborationSubjects, JSX.Element>>
>

const englishComponentMap: ComponentMapType = {
	[Truths.suffering]: englishSufferingComponents,
	[Truths.origin]: englishOriginComponents,
	[Truths.cessation]: englishCessationComponents,
	[Truths['the-way']]: englishTheWayComponents,
}

// Anything other than English can be Partial<...>
const dutchComponents: Partial<ComponentMapType> = {
	[Truths.suffering]: dutchSufferingComponents,
	// ...dutchOriginComponents,
}

export const componentMap: Record<
	Locale,
	Partial<ComponentMapType> // Partial again for translations
> = {
	en: englishComponentMap,
	nl: dutchComponents,
}
