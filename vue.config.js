module.exports = {
    outputDir: 'docs',
    pluginOptions: {
        prerenderSpa: {
            renderRoutes: [
                '/',
                '/di/',
                '/dependency-injection/',
            ],
            useRenderEvent: true,
            headless: true,
            onlyProduction: true
        }
    }
}
