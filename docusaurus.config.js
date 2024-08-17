// @ts-nocheck
// Note: Type annotations allow type checking and IDE autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Babylon Blockchain',
  tagline: 'Unlocking 21 Million Bitcoin to Secure the Decentralized Economy',
  url: 'https://docs.babylonchain.io',
  baseUrl: '/',
  onBrokenLinks: 'throw', // Throws an error on broken links to ensure documentation integrity
  onBrokenMarkdownLinks: 'warn', // Warns about broken markdown links without failing the build
  favicon: 'img/favicon_black.png',

  // GitHub pages deployment config
  organizationName: 'babylonchain', // Your GitHub org/user name
  projectName: 'babylonchain.github.io', // Your repo name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // Specify supported languages
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', // Link for editing docs on GitHub
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', // Link for editing blog posts on GitHub
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Custom CSS for additional styling
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'grpc',
            spec: 'swagger.yaml',
            route: 'docs/developer-guides/grpcrestapi', // Path to the API documentation
          },
        ],
        theme: {
          primaryColor: '#000000', // Custom primary color for Redocusaurus theme
        },
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true, // Allows hiding the sidebar
        autoCollapseCategories: true, // Automatically collapses categories
      },
    },
    navbar: {
      hideOnScroll: true, // Navbar hides on scroll for a cleaner UI
      logo: {
        alt: 'Babylon',
        src: 'img/logo_black.svg',
        srcDark: 'img/logo_white.svg', // Dark mode logo
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/overview',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'docs/developer-guides/grpcrestapi',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/babylonchain',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://babylonchain.io/about',
          label: 'About',
          position: 'right',
        },
        {
          href: 'https://babylonchain.io/contact',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark', // Dark theme footer
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/introduction/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/babylon-chain',
            },
            {
              label: 'Twitter',
              href: 'https://www.twitter.com/babylon_chain',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCmnied_wAVVa2ECVLQH2OLQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://babylonchain.io/blog',
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
