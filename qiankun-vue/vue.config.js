const packageName = 'vueApp';

module.exports = {
    devServer: {
        port: 10000,
        // 支持跨域
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    configureWebpack: {
        output: {
            library: packageName,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${packageName}`,
        }
    }
}