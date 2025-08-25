import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'The Word of the Buddha | by Ajahn Brahm',
  tagline:
    'An Outline of the Teachings of the Buddha in the Words of the Pāli Canon',
  favicon: 'icons/favicon.svg',

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
        sitemap: {
          lastmod: 'datetime',
          changefreq: 'monthly',
          priority: 0.5,
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
      logo: {
        alt: 'Word of the Buddha',
        src: 'icons/favicon.svg',
      },
      items: [
        {
          type: 'html',
          position: 'left',
          value:
            '<small>by <em><a href="about-the-author">Ajahn Brahm</a></em></small>',
        },
        {
          type: 'dropdown',
          label: 'Download',
          position: 'right',
          items: [
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

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/icons/favicon.svg',
            type: 'image/svg+xml',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#a36725',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#a36725',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/icons/apple-touch-icon.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/icons/icon-512x512.webp',
            color: '#a36725',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/icons/icon-ms-tile-square.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#a36725',
          },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: true,
        mode: 'auto',
      },
    ],
  ],
}

export default config
