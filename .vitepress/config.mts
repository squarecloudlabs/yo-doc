import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yeoman Documentation",
  description: "Documentation for Yeoman Generators for CAP, Fiori, and Other SAP Products",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quick Start', link: '/quick-start' }
        ]
      },
      {
        text: 'Generators',
        items: [
          { text: 'Generator List', link: '/generators' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/squarecloudlabs/yo-doc' }
    ]
  }
})
