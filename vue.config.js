// Inside vue.config.js
module.exports = {
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