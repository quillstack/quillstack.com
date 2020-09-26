import webpack from 'webpack';

export default {
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                // global modules
                _: 'lodash'
            }),
        ]
    },
    generate: {
        dir: 'docs'
    },
    buildModules: [
        '@nuxtjs/tailwindcss',
    ],
    modules: [
        'vue-scrollto/nuxt',
    ],
    css: [
        '@/assets/css/style.css',
    ],
    target: 'static',
    components: true
}
