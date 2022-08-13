const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function(app) {
    const isLocal = process.env.REACT_APP_ENV === 'local'
    isLocal && app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.REACT_APP_API_URL,
            changeOrigin: true,
            proxyTimeout: 30 * 60 * 1000
        })
    );
};