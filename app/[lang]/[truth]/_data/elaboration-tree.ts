import {
	CessationTreeType,
	OriginTreeType,
	SufferingTreeType,
	TheWayTreeType,
} from '@/app/[lang]/[truth]/[elaboration]/_data/types'
import { Truths } from '@/app/[lang]/[truth]/_data/types'

export interface TreeType {
	i18nkey: string
	path: string
	children?: TreeType[]
}

const sufferingTree: TreeType[] = [
	{
		i18nkey: SufferingTreeType.khandas,
		path: `${Truths.suffering}/${SufferingTreeType.khandas}`,
		children: [
			{
				i18nkey: SufferingTreeType.form,
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
		i18nkey: SufferingTreeType.three_characteristics_of_existence,
		path: `${Truths.suffering}/${SufferingTreeType.three_characteristics_of_existence}`,
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
		i18nkey: 'dependentOrigination',
		path: `${Truths.origin}/${OriginTreeType.dependent_origination_of_all_phenomena}`,
	},
	{
		i18nkey: 'kamma',
		path: `${Truths.origin}/${OriginTreeType.kamma}`,
		children: [
			{
				i18nkey: 'presentKamma',
				path: `${Truths.origin}/${OriginTreeType.present_kamma}`,
			},
			{
				i18nkey: 'futureKamma',
				path: `${Truths.origin}/${OriginTreeType.future_kamma}`,
			},
			{
				i18nkey: 'kammaAsVolition',
				path: `${Truths.origin}/${OriginTreeType.kamma_as_volition}`,
			},
			{
				i18nkey: 'inheritanceOfDeeds',
				path: `${Truths.origin}/${OriginTreeType.inheritance_of_deeds}`,
			},
		],
	},
]

const cessationTree: TreeType[] = [
	{
		i18nkey: 'dependentCessation',
		path: `${Truths.cessation}/${CessationTreeType.dependent_cessation}`,
	},
	{
		i18nkey: 'nibbanaWithResidue',
		path: `${Truths.cessation}/${CessationTreeType.nibbana_with_residue}`,
	},
	{
		i18nkey: 'theArahant',
		path: `${Truths.cessation}/${CessationTreeType.the_arahant}`,
	},
]

const wayTree: TreeType[] = [
	{
		i18nkey: TheWayTreeType.right_view,
		path: `${Truths['the-way']}/${TheWayTreeType.right_view}`,
		children: [
			{
				i18nkey: TheWayTreeType.wrong_view,
				path: `${Truths['the-way']}/${TheWayTreeType.wrong_view}`,
			},
			{
				i18nkey: TheWayTreeType.four_noble_truths,
				path: `${Truths['the-way']}/${TheWayTreeType.four_noble_truths}`,
			},
			{
				i18nkey: TheWayTreeType.the_good_and_the_bad,
				path: `${Truths['the-way']}/${TheWayTreeType.the_good_and_the_bad}`,
			},
			{
				i18nkey:
					TheWayTreeType.right_view_regarding_five_components_of_existence,
				path: `${Truths['the-way']}/${TheWayTreeType.right_view_regarding_five_components_of_existence}`,
			},
			{
				i18nkey: TheWayTreeType.unprofitable_questions,
				path: `${Truths['the-way']}/${TheWayTreeType.unprofitable_questions}`,
			},
			{
				i18nkey: TheWayTreeType.five_basic_fetters,
				path: `${Truths['the-way']}/${TheWayTreeType.five_basic_fetters}`,
			},
			{
				i18nkey: TheWayTreeType.unwise_contemplations,
				path: `${Truths['the-way']}/${TheWayTreeType.unwise_contemplations}`,
			},
			{
				i18nkey: TheWayTreeType.six_views_about_the_soul,
				path: `${Truths['the-way']}/${TheWayTreeType.six_views_about_the_soul}`,
			},
			{
				i18nkey: TheWayTreeType.two_extremes_and_middle_doctrine,
				path: `${Truths['the-way']}/${TheWayTreeType.two_extremes_and_middle_doctrine}`,
			},
			{
				i18nkey: TheWayTreeType.the_soul,
				path: `${Truths['the-way']}/${TheWayTreeType.the_soul}`,
			},
			{
				i18nkey: TheWayTreeType.wise_contemplations,
				path: `${Truths['the-way']}/${TheWayTreeType.wise_contemplations}`,
			},
			{
				i18nkey: TheWayTreeType.stream_enterer,
				path: `${Truths['the-way']}/${TheWayTreeType.stream_enterer}`,
				children: [
					{
						i18nkey:
							TheWayTreeType.causes_for_arising_of_right_view_of_stream_winning,
						path: `${Truths['the-way']}/${TheWayTreeType.causes_for_arising_of_right_view_of_stream_winning}`,
					},
					{
						i18nkey: TheWayTreeType.view_of_permanent_essence,
						path: `${Truths['the-way']}/${TheWayTreeType.view_of_permanent_essence}`,
					},
					{
						i18nkey: TheWayTreeType.words_of_another,
						path: `${Truths['the-way']}/${TheWayTreeType.words_of_another}`,
					},
					{
						i18nkey: TheWayTreeType.water_simile,
						path: `${Truths['the-way']}/${TheWayTreeType.water_simile}`,
					},
					{
						i18nkey: TheWayTreeType.jhananagami,
						path: `${Truths['the-way']}/${TheWayTreeType.jhananagami}`,
					},
					{
						i18nkey: TheWayTreeType.scent_of_i_am,
						path: `${Truths['the-way']}/${TheWayTreeType.scent_of_i_am}`,
					},
				],
			},
			{
				i18nkey: TheWayTreeType.free_from_speculative_views,
				path: `${Truths['the-way']}/${TheWayTreeType.free_from_speculative_views}`,
			},
			{
				i18nkey: TheWayTreeType.three_characteristics,
				path: `${Truths['the-way']}/${TheWayTreeType.three_characteristics}`,
			},
			{
				i18nkey: TheWayTreeType.dependent_origination,
				path: `${Truths['the-way']}/${TheWayTreeType.dependent_origination}`,
			},
		],
	},
	{
		i18nkey: TheWayTreeType.right_motivation,
		path: `${Truths['the-way']}/${TheWayTreeType.right_motivation}`,
	},
	{
		i18nkey: TheWayTreeType.right_speech,
		path: `${Truths['the-way']}/${TheWayTreeType.right_speech}`,
		children: [
			{
				i18nkey: TheWayTreeType.lying,
				path: `${Truths['the-way']}/${TheWayTreeType.lying}`,
			},
			{
				i18nkey: TheWayTreeType.malicious_gossip,
				path: `${Truths['the-way']}/${TheWayTreeType.malicious_gossip}`,
			},
			{
				i18nkey: TheWayTreeType.harsh_speech,
				path: `${Truths['the-way']}/${TheWayTreeType.harsh_speech}`,
			},
			{
				i18nkey: TheWayTreeType.useless_chatter,
				path: `${Truths['the-way']}/${TheWayTreeType.useless_chatter}`,
			},
			{
				i18nkey: TheWayTreeType.right_way_to_criticise,
				path: `${Truths['the-way']}/${TheWayTreeType.right_way_to_criticise}`,
			},
		],
	},
	{
		i18nkey: TheWayTreeType.right_action,
		path: `${Truths['the-way']}/${TheWayTreeType.right_action}`,
	},
	{
		i18nkey: TheWayTreeType.right_livelihood,
		path: `${Truths['the-way']}/${TheWayTreeType.right_livelihood}`,
	},
	{
		i18nkey: TheWayTreeType.right_endeavour,
		path: `${Truths['the-way']}/${TheWayTreeType.right_endeavour}`,
		children: [
			{
				i18nkey: TheWayTreeType.endeavour_of_restraint,
				path: `${Truths['the-way']}/${TheWayTreeType.endeavour_of_restraint}`,
			},
			{
				i18nkey: TheWayTreeType.endeavour_to_abandon,
				path: `${Truths['the-way']}/${TheWayTreeType.endeavour_to_abandon}`,
			},
			{
				i18nkey: TheWayTreeType.endeavour_to_develop,
				path: `${Truths['the-way']}/${TheWayTreeType.endeavour_to_develop}`,
			},
			{
				i18nkey: TheWayTreeType.endeavour_to_maintain,
				path: `${Truths['the-way']}/${TheWayTreeType.endeavour_to_maintain}`,
			},
		],
	},
	{
		i18nkey: TheWayTreeType.right_mindfulness,
		path: `${Truths['the-way']}/${TheWayTreeType.right_mindfulness}`,
		children: [
			{
				i18nkey: TheWayTreeType.four_focuses_of_mindfulness,
				path: `${Truths['the-way']}/${TheWayTreeType.four_focuses_of_mindfulness}`,
			},
			{
				i18nkey: TheWayTreeType.mindfulness_of_body,
				path: `${Truths['the-way']}/${TheWayTreeType.mindfulness_of_body}`,
				children: [
					{
						i18nkey: TheWayTreeType.mindfulness_of_breathing,
						path: `${Truths['the-way']}/${TheWayTreeType.mindfulness_of_breathing}`,
					},
					{
						i18nkey: TheWayTreeType.four_postures,
						path: `${Truths['the-way']}/${TheWayTreeType.four_postures}`,
					},
					{
						i18nkey: TheWayTreeType.full_comprehension_of_purpose,
						path: `${Truths['the-way']}/${TheWayTreeType.full_comprehension_of_purpose}`,
					},
					{
						i18nkey: TheWayTreeType.bodily_parts,
						path: `${Truths['the-way']}/${TheWayTreeType.bodily_parts}`,
					},
					{
						i18nkey: TheWayTreeType.elements,
						path: `${Truths['the-way']}/${TheWayTreeType.elements}`,
					},
					{
						i18nkey: TheWayTreeType.charnel_ground_contemplations,
						path: `${Truths['the-way']}/${TheWayTreeType.charnel_ground_contemplations}`,
					},
					{
						i18nkey: TheWayTreeType.benefits_of_mindfulness_of_body,
						path: `${Truths['the-way']}/${TheWayTreeType.benefits_of_mindfulness_of_body}`,
					},
				],
			},
			{
				i18nkey: TheWayTreeType.arising_and_passing_away,
				path: `${Truths['the-way']}/${TheWayTreeType.arising_and_passing_away}`,
			},
			{
				i18nkey: TheWayTreeType.mindfulness_of_experience,
				path: `${Truths['the-way']}/${TheWayTreeType.mindfulness_of_experience}`,
			},
			{
				i18nkey: TheWayTreeType.mindfulness_of_the_mind,
				path: `${Truths['the-way']}/${TheWayTreeType.mindfulness_of_the_mind}`,
			},
			{
				i18nkey: TheWayTreeType.mindfulness_of_mind_objects,
				path: `${Truths['the-way']}/${TheWayTreeType.mindfulness_of_mind_objects}`,
				children: [
					{
						i18nkey: TheWayTreeType.five_hindrances,
						path: `${Truths['the-way']}/${TheWayTreeType.five_hindrances}`,
					},
					{
						i18nkey: TheWayTreeType.seven_enlightenment_factors,
						path: `${Truths['the-way']}/${TheWayTreeType.seven_enlightenment_factors}`,
					},
					{
						i18nkey: TheWayTreeType.five_components_of_existence,
						path: `${Truths['the-way']}/${TheWayTreeType.five_components_of_existence}`,
					},
					{
						i18nkey: TheWayTreeType.six_sense_bases,
						path: `${Truths['the-way']}/${TheWayTreeType.six_sense_bases}`,
					},
					{
						i18nkey: TheWayTreeType.the_four_noble_truths,
						path: `${Truths['the-way']}/${TheWayTreeType.the_four_noble_truths}`,
					},
					{
						i18nkey: TheWayTreeType.summary_of_mind_objects,
						path: `${Truths['the-way']}/${TheWayTreeType.summary_of_mind_objects}`,
					},
				],
			},
			{
				i18nkey: TheWayTreeType.summary_of_satipatthana,
				path: `${Truths['the-way']}/${TheWayTreeType.summary_of_satipatthana}`,
			},
			{
				i18nkey: TheWayTreeType.nibbana_through_anapanasati,
				path: `${Truths['the-way']}/${TheWayTreeType.nibbana_through_anapanasati}`,
				children: [
					{
						i18nkey: TheWayTreeType.breathing_completes_mindfulness,
						path: `${Truths['the-way']}/${TheWayTreeType.breathing_completes_mindfulness}`,
					},
					{
						i18nkey: TheWayTreeType.mindfulness_completes_enlightenment_factors,
						path: `${Truths['the-way']}/${TheWayTreeType.mindfulness_completes_enlightenment_factors}`,
					},
				],
			},
		],
	},
	{
		i18nkey: TheWayTreeType.right_stillness,
		path: `${Truths['the-way']}/${TheWayTreeType.right_stillness}`,
		children: [
			{
				i18nkey: TheWayTreeType.four_jhanas,
				path: `${Truths['the-way']}/${TheWayTreeType.four_jhanas}`,
			},
		],
	},
	{
		i18nkey: TheWayTreeType.summing_up_the_path,
		path: `${Truths['the-way']}/${TheWayTreeType.summing_up_the_path}`,
	},
	{
		i18nkey: TheWayTreeType.nibbana,
		path: `${Truths['the-way']}/${TheWayTreeType.nibbana}`,
	},
	{
		i18nkey: TheWayTreeType.the_true_goal,
		path: `${Truths['the-way']}/${TheWayTreeType.the_true_goal}`,
	},
]

export const elaborationTree: Record<Truths, TreeType[]> = {
	suffering: sufferingTree,
	origin: originTree,
	cessation: cessationTree,
	'the-way': wayTree,
}
