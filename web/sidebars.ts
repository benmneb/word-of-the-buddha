import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

/**
 * To keep the `/content` directory with the same filenames and structure as in the `epub` version
 * just modify the side bar here.
 *
 * This makes it easier to maintain any text changes in those files.
 */
const sidebars: SidebarsConfig = {
  contents: [
    // 'copyright-page',
    'forward',
    'acknowledgements-from-the-publisher',
    'preface-to-the-second-edition',
    'the-four-noble-truths',
    'suffering',
    'origin-of-suffering',
    'cessation-of-suffering',
    {
      type: 'category',
      label:
        'IV. The Noble Truth of the Way Leading to the Cessation of Suffering',
      collapsible: false,
      link: {
        type: 'doc',
        id: '08_0_way-leading-to-the-cessation-of-suffering',
      },
      items: [
        { type: 'doc', id: '08_1_right-view', label: '1. Right View' },
        {
          type: 'doc',
          id: '08_2_right-motivation',
          label: '2. Right Motivation',
        },
        { type: 'doc', id: '08_3_right-speech', label: '3. Right Speech' },
        { type: 'doc', id: '08_4_right-action', label: '4. Right Action' },
        {
          type: 'doc',
          id: '08_5_right-livelihood',
          label: '5. Right Livelihood',
        },
        {
          type: 'doc',
          id: '08_6_right-endeavour',
          label: '6. Right Endeavour',
        },
        {
          type: 'doc',
          id: '08_7_right-mindfulness',
          label: '7. Right Mindfulness',
        },
        {
          type: 'doc',
          id: '08_8_right-stillness',
          label: '8. Right Stillness',
        },
      ],
    },
    'the-gradual-training',
    'from-the-anguttara-nikaya',
    'abbreviations',
    'glossary',
    'about-the-author',
  ],
}

export default sidebars
