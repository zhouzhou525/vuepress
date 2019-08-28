module.exports = {
    title: '周周前端之路',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    base: '/',
    repo: 'https://github.com/zhouzhou525/zhouzhou525.github.io.git',
    configureWebpack: {
        resolve: {
            alias: {
                '@': 'public'
            }
        }
    },
    themeConfig: {
        sidebarDepth: 6,
        lastUpdated: 'Last Updated',
        nav: [
            {
                text: 'JS',
                items: [{
                        text: 'js基础',
                        link: '/js/basis/'
                    },
                    {
                        text: 'ES6',
                        link: '/js/ES6/'
                    },
                    {
                        text: 'Vue',
                        link: '/js/vue/'
                    },
                    {
                        text: '构建',
                        link: '/js/build/'
                    }
                ]
            },
            {
                text: 'Web',
                items: [{
                        text: 'HTML',
                        link: '/web/html/'
                    },
                    {
                        text: 'CSS',
                        link: '/web/css/'
                    },
                    {
                        text: '协议',
                        link: '/web/protocol/'
                    },
                    {
                        text: '工具',
                        link: '/web/tool/'
                    },
                    {
                        text: '移动端',
                        link: '/web/mobile/'
                    },
                    {
                        text: '面试',
                        link: '/web/interview/'
                    }
                ]
            },
            {
                text: '计算机基础',
                items: [{
                    text: '数据结构',
                    link: '/basis/dataStructure'
                }]
            },
            {
                text: 'GitHub',
                link: 'https://github.com/zhouzhou525'
            }
        ],
        sidebar: {
            '/js/basis/': [
                {
                    title: 'window',
                    children: [
                        ['window/event', '事件']
                    ]
                }
            ],
            '/js/vue/': [
                {
                    title: 'vue-router',
                    children: [
                        ['vueRouter/vueRouter.md', '基础'],
                        ['vueRouter/navigation.md', '导航守卫']
                    ]
                },
                {
                    title: 'vuePress',
                    children: [
                        ['vuePress', 'vuePress踩坑小记']
                    ]
                }
            ],
            '/js/ES6/': [
                {
                    title: 'ES6',
                    children: [
                        ['es6/array.md', '数组方法总结']
                    ]
                },
                {
                    title: 'TS',
                    children: [
                        ['es6/array.md', '数组方法总结']
                    ]
                }
            ],
            '/web/css/': [
                {
                    title: 'css注意点',
                    children: [
                        ['attention/attention.md', '零碎注意点']
                    ]
                }
            ],
            '/web/tool/': [
                {
                    title: 'css注意点',
                    children: [
                        ['attention/attention.md', '零碎注意点']
                    ]
                }
            ]
        }
    }
}