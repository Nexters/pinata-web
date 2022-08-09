// config-overrides.js
const {override, addWebpackAlias} = require('customize-cra')
const path = require('path')

module.exports = override(
    addWebpackAlias({
        $: path.resolve(__dirname, 'src'),
        $components: path.resolve(__dirname, 'src/components'),
        $constants: path.resolve(__dirname, 'src/constants'),
        $hooks: path.resolve(__dirname, 'src/hooks'),
        $reducer: path.resolve(__dirname, 'src/reducer'),
        $util: path.resolve(__dirname, 'src/util'),
        $app: path.resolve(__dirname, 'src/app'),
        $router: path.resolve(__dirname, 'src/router'),
        $layout: path.resolve(__dirname, 'src/layout'),
        $pages: path.resolve(__dirname, 'src/pages'),
        $fetchs: path.resolve(__dirname, 'src/fetchs'),
        $types: path.resolve(__dirname, 'src/types'),
        $assets: path.resolve(__dirname, 'src/assets'),
        $api: path.resolve(__dirname, 'src/api'),
        $styles: path.resolve(__dirname, 'src/styles'),
        $contexts: path.resolve(__dirname, 'src/contexts'),
    }),
)
