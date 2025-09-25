import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'default',
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'lessons',
        path: 'lessons',
        routeBasePath: '/lessons',
        sidebarPath: require.resolve('./sidebars-lessons.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        routeBasePath: '/tutorials',
        sidebarPath: require.resolve('./sidebars-tutorials.ts'),
      },
    ],
  ],
  title: 'Flutter',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://quangvtvp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/class-doc/',

  // Add explicit trailingSlash configuration
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quangvtvp', // Usually your GitHub org/user name.
  projectName: 'class-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themeConfig: {
    navbar: {
      title: '',
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Trang Chủ',
        },
        {
          type: 'docSidebar',
          sidebarId: 'lessonsSidebar',
          position: 'left',
          label: 'Bài Giảng',
          docsPluginId: 'lessons',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
          position: 'left',
          label: 'Tutorials',
          docsPluginId: 'tutorials',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['dart'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
