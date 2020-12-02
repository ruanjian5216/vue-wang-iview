    const path = require('path');
    module.exports = {
        pages: {
            index: {
                // 修改项目的入口文件
                entry: 'examples/main.js',
                template: 'public/index.html',
                filename: 'index.html'
            }
        },
        // 使 packages 加入编译
        // __dirname 后面要用 + 加号，否则报错无法编译
        chainWebpack: config => {
            config.module
            .rule('js')
            .include.add(path.resolve(__dirname+'packages')).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options;
            })
        }
    }