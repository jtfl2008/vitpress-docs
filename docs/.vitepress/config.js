export default {
  base: '/vitpress-docs/',
  title: '数据驱动组件库', //站点标题
  description: '一个vue3，element-plus封装的组件库', //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: '数据驱动组件库',
    logo: '/favicon.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jtfl2008' },
      // { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
      //   },
      //   link: '...',
      // },
    ],
    nav: [
      { text: '博客', link: '/articles/vue3' },
      { text: 'GuideTest', link: '/guide/test' },
      // { text: 'gitee', link: 'https://gitee.com/geeksdidi' },
      {
        text: 'Drop Menu',
        items: [
          {
            items: [
              { text: 'Item A1', link: '/item-A1' },
              { text: 'Item A2', link: '/item-A2' },
            ],
          },
          {
            items: [
              { text: 'Item B1', link: '/item-B1' },
              { text: 'Item B2', link: '/item-B2' },
            ],
          },
        ],
      },
    ],
    sidebar: {
      '/articles/': [
        {
          text: '组件库源码实现',
          collapsible: true,
          items: [
            {
              text: '组件库环境搭建',
              link: '/articles/组件库环境搭建',
            },
            { text: 'gulp的使用', link: '/articles/gulp的使用' },
          ],
        },
        {
          text: 'vue教程',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'vue3',
              link: '/articles/vue3',
            },
          ],
        },
      ],
    },
  },
};
