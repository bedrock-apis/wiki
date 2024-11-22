import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./wiki",
  base: "/wiki",
  //cleanUrls: true,
  title: "Bedrock APIs",
  description: "Bedrock Script API Wiki and Resources",
  head:[
    ["link",{rel: "icon", href:"/wiki/favicon.png"}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bedrock-apis' },
      { icon: 'discord', link: 'https://discord.gg/38M6A2RvKk' }
    ]
  }
})
