module.exports = {
    title: '周周前端之路',
    description: '周周前端之路',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }]
    ],
    base: '/',
    repo: 'https://github.com/zhouzhou525/zhouzhou525.github.io.git',
    dest: './public',
    themeConfig: {
        sidebarDepth: 4,
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'home', link: '/' },
            {
                text: 'JS',
                items: [
                    { text: 'JS基础', link: '/js/basis/' },
                    { text: 'ES6', link: '/js/ES6/' },
                    { text: 'Vue', link: '/js/vue/' },
                    { text: '构建', link: '/js/build/' }
                ]
            },
            {
                text: '前端',
                items: [
                    { text: 'HTML', link: '/frontEnd/html/' },
                    { text: 'CSS', link: '/frontEnd/css/' },
                    { text: '浏览器', link: '/frontEnd/browser/' },
                    { text: '工具', link: '/frontEnd/interview/' },
                    { text: '移动端', link: '/frontEnd/mobile/' },
                    { text: '面试', link: '/frontEnd/interview/' }
                ]
            },
            {
                text: '协议', items: [
                    { text: 'HTTP', link: '/protocol/HTTP' },
                    { text: 'TCP/IP', link: '/protocol/TCP' },
                    { text: '其他', link: '/protocol/others' }
                ]
            },
            {
                text: '计算机基础', items: [
                    { text: '数据结构', link: '/basis/dataStructure' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/zhouzhou525' }
        ],
        sidebar: {
            '/js/vue/': [
                '',
                'vueRouter.md'
            ]
        }
    }
}
