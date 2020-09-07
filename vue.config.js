module.exports = {
    outputDir: 'docs',
    pluginOptions: {
        prerenderSpa: {
            registry: undefined,
            renderRoutes: [
                '/',
                '/dependency-injection.html',
            ],
            useRenderEvent: true,
            headless: true,
            onlyProduction: true
        }
    }
}
