import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

const vitepressSidebarOptions = {
  documentRootPath: '/tils',
  sortMenusByName: true,
  sortMenusOrderByDescending: true,
}

export default defineConfig({
  title: '권기범의 TIL🌐',
  description: '권기범의 데일리 TIL은 뭘까요~? 코 코 코프링~',
  vite: {},
  themeConfig: {
    nav: [],
    sidebar: generateSidebar(vitepressSidebarOptions),
    socialLinks: [
      { icon: 'x', link: 'https://x.com/_ggbDev_' },
      { icon: 'discord', link: 'https://discord.gg/FnvxpbQ8wf' },
    ],
  },
})
