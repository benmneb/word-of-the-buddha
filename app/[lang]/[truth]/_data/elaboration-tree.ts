import {
	OriginTreeType,
	SufferingTreeType,
} from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import { Truths } from '@/app/[lang]/[truth]/_data/types'

export interface TreeType {
	text: string
	root?: Truths
	path: string
	children?: TreeType[]
}

const sufferingTree: TreeType[] = [
	{
		text: 'Five Components',
		path: `/${Truths['suffering']}/${SufferingTreeType['khandas']}`,
		children: [
			{
				text: 'Form',
				path: `/${Truths['suffering']}/${SufferingTreeType['form']}`,
			},
			{
				text: 'Experience',
				path: `/${Truths['suffering']}/${SufferingTreeType['experience']}`,
			},
		],
	},
]

const originTree: TreeType[] = [
	{
		text: 'Origin of Wanting',
		path: `/${Truths['origin']}/${OriginTreeType['origin']}`,
	},
	{
		text: 'Dependent Origination',
		path: `/${Truths['origin']}/${OriginTreeType['dependent-origination']}`,
	},
]

export const elaborationTreeData: Record<Truths, TreeType[]> = {
	suffering: sufferingTree,
	origin: originTree,
	cessation: sufferingTree,
	'the-way': sufferingTree,
}
