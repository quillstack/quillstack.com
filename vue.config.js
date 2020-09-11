module.exports = {
    outputDir: 'docs',
    pluginOptions: {
        prerenderSpa: {
            renderRoutes: [
                '/',
                '/di/',
                '/benchmark/',
            ],
            useRenderEvent: true,
            headless: true,
            onlyProduction: true
        }
    }
}
