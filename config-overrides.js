// config-overrides.js
const {override, addWebpackAlias} = require('customize-cra')
const path = require('path')

module.exports = override(
    addWebpackAlias({
        $: path.resolve(__dirname, 'src'),
        $components: path.resolve(__dirname, 'src/components'),
        $constants: path.resolve(__dirname, 'src/constants'),
        $hooks: path.resolve(__dirname, 'src/hooks'),
        $reducer: path.resolve(__dirname, 'src/hooks'),
        $util: path.resolve(__dirname, 'src/hooks'),
        $app: path.resolve(__dirname, 'src/hooks'),
        $router: path.resolve(__dirname, 'src/hooks'),
        $layout: path.resolve(__dirname, 'src/hooks'),
        $pages: path.resolve(__dirname, 'src/pages'),
    }),
)
