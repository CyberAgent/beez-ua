({
    appDir: "./s",
    baseUrl: ".",
    dir: "./dist",
    optimize: "none",
    //optimize: "uglify2",

    paths: {
        "beez.ua" : "./beez-ua/index"
    },
    modules: [
        {
            name: "beez.ua"
        }
    ]
})
