import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'The Word of the Buddha | by Ajahn Brahm',
  tagline:
    'An Outline of the Teachings of the Buddha in the Words of the Pāli Canon',
  favicon: 'icons/favicon.ico',

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
    metadata: [
      {
        name: 'description',
        content:
          'An Outline of the Teachings of the Buddha in the Words of the Pāli Canon',
      },
      {
        property: 'og:description',
        content:
          'An Outline of the Teachings of the Buddha in the Words of the Pāli Canon',
      },
    ],
    navbar: {
      hideOnScroll: true,
      title: 'The Word of the Buddha',
      logo: {
        alt: 'Word of the Buddha',
        src: 'icons/icon-192x192.webp',
        style: { borderRadius: '0.2rem' },
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
      copyright: `
      <p>
        Copyright © ${new Date().getFullYear()} Ajahn Brahmavaṃso.
        All rights reserved.
        Permission to copy, reprint and distribute this publication is hereby given provided no changes are made to the content or layout.
        Reproduction in any way for commercial gain is prohibited.
      </p>
      <div>
        Website by <a href="https://www.github.com/benmneb/word-of-the-buddha" target="_blank">benmneb</a>
        <svg width="16px" height="16px" viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
          <path fill="currentColor" d="M500 177q-115 0 -214 58q-96 57 -153 153q-58 99 -58 214t58 214q57 96 153 153q99 58 214 58t214 -58q96 -57 153 -153q58 -99 58 -214t-58 -214q-57 -96 -153 -153q-99 -58 -214 -58zM496 264h3h1q92 0 171 46q76 45 121 121q46 79 46 171t-46 171q-45 76 -121 121
          q-79 46 -171 46t-171 -46q-76 -45 -121 -121q-46 -79 -46 -170.5t45 -170.5q44 -76 120 -121q77 -46 169 -47zM497 363q-56 0 -104.5 24t-82 66.5t-45.5 94.5h114q15 -34 47 -55t71 -21q35 0 65 17.5t47.5 47.5t17.5 65t-17.5 65t-47.5 47.5t-65 17.5q-39 0 -71 -21t-47 -54
          h-114q12 52 45.5 94t82 66t104.5 24q64 0 119 -32.5t87 -87t32 -119.5t-32 -119.5t-87 -87t-119 -32.5z" />
        </svg>
        <a rel="license" href="https://www.gnu.org/licenses/agpl-3.0.txt" target="_blank">AGPL-3.0-or-later</a>
      </div>`,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
          'saveData',
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
            name: 'mobile-web-app-capable',
            content: 'yes',
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
    ['docusaurus-plugin-simple-analytics', {}],
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
