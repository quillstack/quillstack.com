module.exports = {
    outputDir: 'docs',
    pluginOptions: {
        prerenderSpa: {
            renderRoutes: [
                '/',
                '/benchmark/',
                '/di/',
                '/request/',
            ],
            useRenderEvent: true,
            headless: true,
            onlyProduction: true
        }
    }
}
