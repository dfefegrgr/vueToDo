const {defineConfig} = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { TDesignResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
    assetsDir:'static',
    parallel:false,
    publicPath:'./',
    runtimeCompiler: true,
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [TDesignResolver({
                    library: 'vue-next'
                })],
            }),
            Components({
                resolvers: [TDesignResolver({
                    library: 'vue-next'
                })],
            }),
        ],
        externals: {}
    }
})
