// Inside vue.config.js
module.exports = {
    pluginOptions: {
        compression: {
            brotli: {
                filename: '[path].br[query]',
                algorithm: 'brotliCompress',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                compressionOptions: {
                    level: 11,
                },
                minRatio: 0.8,
            },
            gzip: {
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                minRatio: 0.8,
            }
        }
    },
    // ...other vue-cli plugin options...
    pwa: {
        name: 'WheNext',
        themeColor: '#c8a2c8',
        msTileColor: '#fdb93b',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#fdb93b',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/registerServiceWorker.js',
            // ...other Workbox options...
        }
    }
}