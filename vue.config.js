module.exports = {
    outputDir: 'docs',
    pluginOptions: {
        prerenderSpa: {
            registry: undefined,
            renderRoutes: [
                '/',
                '/dependency-injection/',
            ],
            useRenderEvent: true,
            headless: true,
            onlyProduction: true
        }
    }
}
