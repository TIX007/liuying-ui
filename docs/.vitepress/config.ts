

module.exports = {
    lang: 'zh-CN',
    title: 'LiuYing-UI',
    titleTemplate: '基于Vite+Ts的Vue3.0组件库',
    description: '基于Vite+Ts的Vue3.0组件库',
    base: '/vue3-liuying-ui/',
    editLinks: true,
    lastUpdatedText: '上次更新',
    themeConfig: {
        lastUpdated: '上次更新',
        editLink: {
            pattern: 'https://github.com/TIX007/liuying-ui/blob/master/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
        docFooter: {
            prev:'上一页',
            next:'下一页'
        },
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '组件',
                link: '/components/'
            },
        ],
        sidebar: {
            '/components/': [
                {
                    text: '开发指南', items: [
                        { text: '安装', link: '/components/' }
                    ]
                },
                {
                    text: '通用',
                    items: [
                        { text: 'Button 按钮', link: '/components/button/' },
                        { text: 'Tree 树形控件', link: '/components/tree/' },
                    ],
                },
                { text: '导航', items: [] },
                { text: '反馈', items: [] },
                { text: '数据录入', items: [] },
                { text: '数据展示', items: [] },
                { text: '布局', items: [] },
            ],
            '/': [
                { text: '快速开始', link: '/components/', items: [] }
            ]
        }
    },
    markdown: {
        config: (md) => {
            // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
            const { demoBlockPlugin } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
}
