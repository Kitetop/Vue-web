const path = require('path')
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径

module.exports = {
    entry: path.join(root, 'src/main.js'),  // 入口文件路径
    output: {
        path: path.join(root, 'dist'),  // 出口目录
        filename: 'main.js'  // 出口文件名
    },
    resolve: {
        alias: { // 配置目录别名
            // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
            components: path.join(root, 'src/components'),
            views: path.join(root, 'src/views'),
            styles: path.join(root, 'src/styles'),
            store: path.join(root, 'src/store')
        },
        extensions: ['', '.js', '.vue'], // 引用js和vue文件可以省略后缀名
        fallback: [path.join(root, 'node_modules')] // 找不到的模块会尝试在这个数组的目录里面再寻找
    },
    resolveLoader: {
        fallback: [path.join(root, 'node_modules')] // 找不到的loader模块会尝试在这个数组的目录里面再寻找
    },
    module: { // 配置loader
        loaders: [
            {test: /\.vue$/, loader: 'vue'}, // 所有.vue结尾的文件，使用vue-loader
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/} // .js文件使用babel-loader，切记排除node_modules目录
        ]
    }
}