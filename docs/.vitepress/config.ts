import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const nav = [
    { text: "指南", link: "/guide/nav" },
    { text: "组件", link: "/components/button/index.md" },
]

const sidebar = {
    '/guide/': [
        {
            text:'基础',
            items: [
                {text:'导航', link:'/guide/nav'},
                {text:'安装', link:'/guide/installation'},
                {text:'快速开始', link:'/guide/quickstart'},
            ]
        },
        {
            text:'进阶',
            items: [
                {text:'国际化', link:'/guide/i18n'},
                {text:'主题', link:'/guide/theming'},
                {text:'暗黑模式', link:'/guide/dark-mode'},
            ]
        }
    ],
    '/components/': [
        {
            text: 'Basic 基础组件',
            items: [
                { text: 'Button 按钮', link: '/components/button/index.md' },
                { text: 'Border 边框', link: '/components/border/index.md' }
            ]
        },

    ]
}

export default {
    title: "Viola",
    siteTitle: "Viola",
    description: "组件库搭建",
    themeConfig: {
        lang: 'zh-CN',
        logo: '/icon.png',
        nav,
        sidebar,
        socialLinks: [
            { icon: "github", link: "" },
        ],
    },
    markdown: {
        config: (md) => {
            md.use(demoBlockPlugin)
        }
    }
}