import {
	OriginTreeType,
	SufferingTreeType,
} from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import { Truths } from '@/app/[lang]/[truth]/_data/types'

export interface TreeType {
	i18nkey: string
	path: string
	children?: TreeType[]
}

const sufferingTree: TreeType[] = [
	{
		i18nkey: 'fiveComponents',
		path: `${Truths.suffering}/${SufferingTreeType.khandas}`,
		children: [
			{
				i18nkey: 'form',
				path: `${Truths.suffering}/${SufferingTreeType.form}`,
			},
			{
				i18nkey: 'experience',
				path: `${Truths.suffering}/${SufferingTreeType.experience}`,
			},
			{
				i18nkey: 'perception',
				path: `${Truths.suffering}/${SufferingTreeType.perception}`,
			},
			{
				i18nkey: 'will',
				path: `${Truths.suffering}/${SufferingTreeType.will}`,
			},
			{
				i18nkey: 'consciousnesses',
				path: `${Truths.suffering}/${SufferingTreeType.consciousnesses}`,
				children: [
					{
						i18nkey: 'dOConsciousnesses',
						path: `${Truths.suffering}/${SufferingTreeType.dependent_origination_of_consciousnesses}`,
					},
					{
						i18nkey: 'sankhara',
						path: `${Truths.suffering}/${SufferingTreeType.sankhara}`,
					},
					{
						i18nkey: 'dependencyOfConsciousnesses',
						path: `${Truths.suffering}/${SufferingTreeType.dependency_of_consciousnesses}`,
					},
				],
			},
		],
	},
	{
		i18nkey: 'threeCharacteristics',
		path: `${Truths.suffering}/${SufferingTreeType.three_characteristics}`,
	},
	{
		i18nkey: 'anatta',
		path: `${Truths.suffering}/${SufferingTreeType.anatta}`,
	},
	{
		i18nkey: 'threeWarnings',
		path: `${Truths.suffering}/${SufferingTreeType.three_warnings}`,
	},
	{
		i18nkey: 'samsara',
		path: `${Truths.suffering}/${SufferingTreeType.samsara}`,
	},
]

const originTree: TreeType[] = [
	{
		i18nkey: 'origin',
		path: `${Truths.origin}/${OriginTreeType.origin}`,
	},
	{
		i18nkey: 'dependent-origination',
		path: `${Truths.origin}/${OriginTreeType.dependent_origination}`,
	},
]

export const elaborationTree: Record<Truths, TreeType[]> = {
	suffering: sufferingTree,
	origin: originTree,
	cessation: sufferingTree,
	'the-way': sufferingTree,
}
