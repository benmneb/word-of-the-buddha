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
          label: '📚',
          position: 'right',
          items: [
            {
              label: 'Download EPUB',
              // TODO: Update to internet archive link when available
              href: 'https://github.com/benmneb/word-of-the-buddha/blob/main/epub/build/WOTB2.epub?raw=true',
            },
            {
              label: 'Download PDF',
              // TODO: Update to internet archive link when available
              href: 'https://github.com/benmneb/word-of-the-buddha/blob/main/pdf/WOTB2.pdf?raw=true',
            },
          ],
        },
        {
          href: 'https://github.com/benmneb/word-of-the-buddha',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
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

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true, // Recommended as long-term-cache of index file is possible.
        searchBarPosition: 'right',
        language: ['en'],
        indexBlog: false,
        docsRouteBasePath: '/',
        removeDefaultStemmer: true, // Enable this if you want to be able to search for any partial word at the cost of search performance.
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutKeymap: 's', // Use 'S' key to focus search bar (default is "mod+k")
        searchBarShortcutHint: false,
        fuzzyMatchingDistance: 1,
      },
    ],
  ],
}

export default config
