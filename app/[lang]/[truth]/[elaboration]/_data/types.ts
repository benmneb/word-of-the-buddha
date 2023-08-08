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

export const ElaborationSubjects = {
	...SufferingTreeType,
	...OriginTreeType,
}

export type ElaborationSubjects = SufferingTreeType | OriginTreeType
