module.exports = {
    outputDir: 'docs',
    pluginOptions: {
        prerenderSpa: {
            registry: undefined,
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
