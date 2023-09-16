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
	kamma = 'kamma',
	present_kamma = 'present-kamma',
	future_kamma = 'future-kamma',
	kamma_as_volition = 'kamma-as-volition',
	inheritance_of_deeds = 'inheritance-of-deeds',
}

export enum CessationTreeType {
	dependent_cessation = 'dependent-cessation',
	nibbana_with_residue = 'nibbana-with-residue',
	the_arahant = 'the-arahant',
}

export enum TheWayTreeType {
	// 1
	right_view = 'right-view',
	wrong_view = 'wrong-view',
	the_four_noble_truths = 'the-four-noble-truths',
	the_good_and_the_bad = 'the-good-and-the-bad',
	right_view_regarding_five_components_of_existence = 'right-view-regarding-five-components-of-existence',
	unprofitable_questions = 'unprofitable-questions',
	five_basic_fetters = 'five-basic-fetters',
	unwise_contemplations = 'unwise-contemplations',
	six_views_about_the_soul = 'six-views-about-the-soul',
	two_extremes_and_middle_doctrine = 'two-extremes-and-middle-doctrine',
	the_soul = 'the-soul',
	wise_contemplations = 'wise-contemplations',
	stream_enterer = 'stream-enterer',
	causes_for_arising_of_right_view_of_stream_winning = 'causes-for-arising-of-right-view-of-stream-winning',
	view_of_permanent_essence = 'view-of-permanent-essence',
	words_of_another = 'words-of-another',
	water_simile = 'water_simile',
	jhananagami = 'jhananagami',
	scent_of_i_am = 'scent-of-i-am',
	free_from_speculative_views = 'free-from-speculative-views',
	three_characteristics = 'three-characteristics',
	dependent_origination = 'dependent-origination',
	// 2
	right_motivation = 'right-motivation',
	// 3
	right_speech = 'right-speech',
	lying = 'lying',
	malicious_gossip = 'malicious-gossip',
	harsh_speech = 'harsh-speech',
	useless_chatter = 'useless-chatter',
	right_way_to_criticise = 'right-way-to-criticise',
	// 4
	right_action = 'right-action',
	// 5
	right_livelihood = 'right-livelihood',
	// 6,
	right_endeavour = 'right-endeavour',
	endeavour_of_restraint = 'endeavour-of-restraint',
	endeavour_to_abandon = 'endeavour-to-abandon',
	endeavour_to_develop = 'endeavour-to-develop',
	endeavour_to_maintain = 'endeavour-to-maintain',
	// 7
	right_mindfulness = 'right-mindfulness',
	four_focuses_of_mindfulness = 'four-focuses-of-mindfulness',
	mindfulness_of_body = 'mindfulness-of-body',
	mindfulness_of_breathing = 'mindfulness-of-breathing',
	four_postures = 'four-postures',
	full_comprehension_of_purpose = 'full-comprehension-of-purpose',
	bodily_parts = 'bodily-parts',
	elements = 'elements',
	charnel_ground_contemplations = 'charnel-ground-contemplations',
	benefits_of_mindfulness_of_body = 'benefits-of-mindfulness-of-body',
	arising_and_passing_away = 'arising-and-passing-away',
	mindfulness_of_experience = 'mindfulness-of-experience',
	mindfulness_of_the_mind = 'mindfulness-of-the-mind',
	mindfulness_of_mind_objects = 'mindfulness-of-mind-objects',
	five_hindrances = 'five-hindrances',
	seven_enlightenment_factors = 'seven-enlightenment-factors',
	five_components_of_existence = 'five-components-of-experience',
	six_sense_bases = 'six-sense-bases',
	four_noble_truths = 'four-noble-truths',
	summary_of_mind_objects = 'summary-of-mind-objects',
	summary_of_satipatthana = 'summary-of-satipatthana',
	nibbana_through_anapanasati = 'nibbana-through-anapanasati',
	breathing_completes_mindfulness = 'breathing-completes-mindfulness',
	mindfulness_completes_enlightenment_factors = 'mindfulness-completes-enlightenment-factors',
	// 8
	right_stillness = 'right-stillness',
	four_jhanas = 'four-jhanas',
	//
	summing_up_the_path = 'summing-up-the-path',
	nibbana = 'nibbana',
	the_true_goal = 'the-true-goal',
}

type ElaborationTypes =
	| typeof SufferingTreeType
	| typeof OriginTreeType
	| typeof CessationTreeType
	| typeof TheWayTreeType

export const ElaborationSubjectsMap: Record<Truths, ElaborationTypes> = {
	suffering: SufferingTreeType,
	origin: OriginTreeType,
	cessation: OriginTreeType,
	'the-way': OriginTreeType,
}

export type ElaborationSubjects = SufferingTreeType | OriginTreeType
