// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ArithFi',
  tagline: 'Document for ArithFi',
  favicon: 'img/favicon.ico',
  
  // Set the production url of your site here
  url: 'https://arithfi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ArithFi', // Usually your GitHub org/user name.
  projectName: 'arithfi.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es', 'ko', 'vi', 'tr', 'ru'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/ArithFi/arithfi.github.io/edit/master/',
        },
        blog: {
          path: 'blog',
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // postsPerPage: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/ArithFi/arithfi.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-FN1NSDCLC0',
          anonymizeIP: true,
        },
      }),
    ],
    
  ],
  
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'ArithFi',
          logo: {
            alt: 'ArithFi Logo',
            src: 'img/logo.svg',
            href: 'https://arithfi.com',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'whitepaperSidebar',
              position: 'left',
              label: 'Doc',
            },
            {
              type: 'docSidebar',
              sidebarId: 'blogsSidebar',
              position: 'left',
              label: 'Blogs',
            },
            {
              type: 'html',
              position: 'right',
              value: `<a style="display: flex; cursor: pointer" href="https://github.com/ArithFi" target="_blank"><img src="/img/github-mark.svg" width="24" height="24" alt="github" /></a>`
            },
            {
              type: 'localeDropdown',
              position: 'right',
            },
          ],
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;
