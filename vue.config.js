const {defineConfig} = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { TDesignResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
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
