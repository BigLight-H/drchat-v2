const {defineConfig} = require('@vue/cli-service')
module.exports       = defineConfig({
    transpileDependencies: true,
    devServer: {
        https: true,
        proxy: {
            '/api': {
                target: 'http://drchat.me',
                ws: true,
                changeOrigin: true,
            },
        },
    },
})
