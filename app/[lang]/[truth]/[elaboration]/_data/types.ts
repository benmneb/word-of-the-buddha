import { Truths } from '@/app/[lang]/[truth]/_data/types'

export enum SufferingTreeType {
	khandas = 'khandas',
	form = 'form',
	experience = 'experience',
	perception = 'perception',
	will = 'will',
	consciousnesses = 'consciousnesses',
	dependent_origination_of_consciousnesses = 'dependent-origination-of-consciousnesses',
	sankhara = 'sankhara',
	dependency_of_consciousnesses = 'dependency-of-consciousnesses',
	three_characteristics = 'three-characteristics',
	anatta = 'anatta',
	three_warnings = 'three-warnings',
	samsara = 'samsara',
}

export enum OriginTreeType {
	origin = 'origin',
	dependent_origination = 'dependent-origination',
}

type ElaborationTypes = typeof SufferingTreeType | typeof OriginTreeType

export const ElaborationSubjectsMap: Record<Truths, ElaborationTypes> = {
	suffering: SufferingTreeType,
	origin: OriginTreeType,
	cessation: OriginTreeType,
	'the-way': OriginTreeType,
}

export type ElaborationSubjects = SufferingTreeType | OriginTreeType
