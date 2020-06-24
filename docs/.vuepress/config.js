const nav = require("./nav.js");
module.exports = {
    //左上角和页面的标题
    title: 'DKLi',
    description: '个人笔记',
    plugins: {
        "@vuepress/back-to-top": {},
        "vuepress-plugin-auto-sidebar": {
            nav: true,
            collapsable: true
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        activeHeaderLinks: false,
        displayAllHeaders: false,
        searchMaxSuggestions: 10,
        logo: '/DKLi.png',
        nav
    },
}