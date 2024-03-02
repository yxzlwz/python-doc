const getConfig = require("vuepress-bar");

const { nav, sidebar } = getConfig({ stripNumbers: false });

module.exports = {
    title: "Python 教程",
    description:
        "新手友好的 Python 全套教程，由异想之旅和青岛中学HCC项目开发社团共同编写并免费公开。",
    base: "/",
    head: [
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
        ["script", { src: "/js/main.js" }],
    ],
    theme: "reco",
    themeConfig: {
        nav: [
            { text: "语雀", link: "https://www.yuque.com/yxzl/python" },
            { text: "异想之旅", link: "https://www.yixiangzhilv.com/" },
            { text: "青岛中学HCC项目开发社团", link: "https://www.qdzx.icu/" },
            ...nav,
        ],
        sidebar,
        noFoundPageByTencent: false,
        subSidebar: "false",
        author: "异想之旅, 青岛中学HCC项目开发社团",
    },
    markdown: {
        lineNumbers: true,
    },
    plugins: [
        [
            "vuepress-plugin-medium-zoom",
            {
                selector: "img",
                delay: 50,
                options: {
                    margin: 24,
                    background: "rgba(0, 0, 0, 0.5)",
                    scrollOffset: 0,
                },
            },
        ],
        "vuepress-plugin-smooth-scroll",
    ],
};
