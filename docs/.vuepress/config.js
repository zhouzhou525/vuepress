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
                text: '前端',
                items: [
                    {
                        text: 'html/css',
                        link: '/js/css-html/'
                    },
                    {
                        text: 'javascript',
                        link: '/js/basis/'
                    },
                    {
                        text: 'ES6/TS',
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
                items: [
                    {
                        text: 'web',
                        link: '/web/web/'
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
                text: 'GitHub',
                link: 'https://github.com/zhouzhou525'
            }
        ],
        sidebar: {
            '/js/css-html/': [
                {
                    title: 'css',
                    children: [
                        ['css/attention.md', '零碎注意点']
                    ]
                },
                {
                    title: 'html'
                }
            ],
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
            ]
        }
    }
}