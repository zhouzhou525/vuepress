搭建博客时，参照[官网][1]就可以完成基本搭建
但是，也走了些弯路，先纪录下来

## 想实现下拉框，展示不同路由

themeConfig配置如下：
```
nav: [
    {
        text: 'home',
        link: '/'
    },
    {
        text: 'JS',
        items: [
            {
                text: 'ES6',
                link: '/js/ES6/'
            },
            {
                text: 'Vue',
                link: '/js/vue/'
            }
        ]
    }
]
```
```
sidebar: {
    '/js/vue/': [
        '',     // README.md                  
        {
            title: 'vue-router',
            children: [
                ['vueRouter/vueRouter.md', '基础'],
                ['vueRouter/navigation.md', '导航守卫']
            ]
        }
    ],
    '/js/ES6/': [
        {
            title: 'ES6',
            children: [
                ['es6/array.md', '数组方法总结']
            ]
        }
   ]
}
```

## 必须有默认README.md
每个文件根路径默认为README.md，会被编译成index.html文件

## 发布到github博客
使用下面的npm 命令将项目编译成html
```
"docs:build": "vuepress build docs"
```
**然后只将生成后的html项目文件，放到.github.io的仓库里**



  [1]: https://vuepress.vuejs.org/