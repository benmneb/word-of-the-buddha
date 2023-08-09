import { Truths } from '@/app/[lang]/[truth]/_data/types'

export enum SufferingTreeType {
	khandas = 'khandas',
	form = 'form',
	experience = 'experience',
	'three-characteristics' = 'three-characteristics',
}

export enum OriginTreeType {
	origin = 'origin',
	'dependent-origination' = 'dependent-origination',
}

type ElaborationTypes = typeof SufferingTreeType | typeof OriginTreeType

export const ElaborationSubjectsMap: Record<Truths, ElaborationTypes> = {
	suffering: SufferingTreeType,
	origin: OriginTreeType,
	cessation: OriginTreeType,
	'the-way': OriginTreeType,
}

export type ElaborationSubjects = SufferingTreeType | OriginTreeType
