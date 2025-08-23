import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'The Word of the Buddha | by Ajahn Brahm',
  tagline:
    'An Outline of the Teachings of the Buddha in the Words of the Pāli Canon',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.wordofthebuddha.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
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
    //   content: 'Announcement!!1',
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
          label: 'Offline',
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
      links: [], // https://docusaurus.io/docs/api/themes/configuration#footer-links
      // logo: {
      //   alt: 'Logo',
      //   src: 'img/logo.png',
      //   href: 'https://...',
      //   width: 160,
      //   height: 51,
      // },
      copyright: `Copyright © ${new Date().getFullYear()} Ajahn Brahmavaṃso.

      All rights reserved.

      Permission to copy, reprint and distribute this publication is hereby given provided no changes are made to the content or layout.

      Reproduction in any way for commercial gain is prohibited.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
