import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'The Word of the Buddha | by Ajahn Brahm',
  tagline:
    'An Outline of the Teachings of the Buddha in the Words of the Pāli Canon',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // https://docusaurus.io/docs/api/docusaurus-config#future
  },

  // Production url
  url: 'https://www.wordofthebuddha.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Set useful metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'content',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          breadcrumbs: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // announcementBar: {
    //   id: 'id1',
    //   content: 'New updates released',
    //   backgroundColor: 'orange',
    //   textColor: '#091E42',
    //   isCloseable: true,
    // },
    // TODO: Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      hideOnScroll: true,
      title: 'The Word of the Buddha',
      // logo: {
      //   alt: 'Word of the Buddha',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'html',
          position: 'left',
          value: '<small><em>by Ajahn Brahm</em></small>',
        },
        {
          type: 'dropdown',
          label: 'Download',
          position: 'right',
          items: [
            {
              label: 'PWA',
              href: 'https://archive.org', // TODO
            },
            {
              label: 'EPUB',
              href: 'https://archive.org', // TODO
            },
            {
              label: 'PDF',
              href: 'https://archive.org', // TODO
            },
          ],
        },
        {
          href: 'https://github.com/benmneb/word-of-the-buddha',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
        // TODO: Add seearch: https://docusaurus.io/docs/search
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Ajahn Brahmavaṃso.
      All rights reserved.
      Permission to copy, reprint and distribute this publication is hereby given provided no changes are made to the content or layout.
      Reproduction in any way for commercial gain is prohibited.`,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
