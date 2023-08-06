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
		path: `${Truths['suffering']}/${SufferingTreeType['khandas']}`,
		children: [
			{
				i18nkey: 'form',
				path: `${Truths['suffering']}/${SufferingTreeType['form']}`,
			},
			{
				i18nkey: 'experience',
				path: `${Truths['suffering']}/${SufferingTreeType['experience']}`,
			},
		],
	},
]

const originTree: TreeType[] = [
	{
		i18nkey: 'origin',
		path: `${Truths['origin']}/${OriginTreeType['origin']}`,
	},
	{
		i18nkey: 'dependent-origination',
		path: `${Truths['origin']}/${OriginTreeType['dependent-origination']}`,
	},
]

export const elaborationTree: Record<Truths, TreeType[]> = {
	suffering: sufferingTree,
	origin: originTree,
	cessation: sufferingTree,
	'the-way': sufferingTree,
}
