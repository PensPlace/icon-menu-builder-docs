// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PowerApps Icon Menu Builder v2',
  tagline: 'Icons are cool',
  url: 'https://pensplace.github.io/',
  baseUrl: '/icon-menu-builder-docs/',
  trailingSlash:false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PensPlace', // Usually your GitHub org/user name.
  projectName: 'icon-menu-builder-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
          // Please change this to your repo.
          editUrl: 'https://github.com/PensPlace/icon-menu-builder-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/PensPlace/icon-menu-builder-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        title: 'Icon Menu Builder v2',
        logo: {
          alt: 'My Site Logo',
          src: 'https://pensplace.github.io/icon-menu-builder-docs/img/PensPlace.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/introduction',
            position: 'left',
            label: 'Getting Started',
          }, 
          {
            type: 'doc',
            docId: 'user-guide/overview',
            position: 'left',
            label: 'User Guide',
          }, 
          {
            type: 'doc',
            position: 'left',
            docId: 'iconsets/fluentui',
            label: 'Icon Sets',
          },
          
          {to: '/blog', label: 'News', position: 'left'},
          {
            href: 'https://github.com/P3N-101/icon-menu-builder',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} PensPlace.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
