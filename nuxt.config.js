import webpack from 'webpack';

export default {
    build: {
        dir: 'docs',
        plugins: [
            new webpack.ProvidePlugin({
                // global modules
                _: 'lodash'
            }),
        ]
    },
    redirect: [
        {
            // eslint-disable-next-line
            from: '(?!^\/$|^\/[?].*$)(.*\/[?](.*)$|.*\/$)',
            to: (from, req) => {
                const base = req._parsedUrl.pathname.replace(/\/$/, '');  // We take pathname instead of req.url because of the query parameters
                const search = req._parsedUrl.search;
                return base + (search != null ? search : '');
            },
            statusCode: 301
        },
    ],
    router: {
        trailingSlash: false
    },
    generate: {
        dir: 'docs'
    },
    buildModules: [
        '@nuxtjs/tailwindcss',
        ['@nuxtjs/google-analytics', {
            id: 'UA-37770230-7'
        }],
    ],
    modules: [
        'vue-scrollto/nuxt',
        '@nuxtjs/redirect-module',
    ],
    css: [
        '@/assets/css/style.css',
    ],
    target: 'static',
    components: true
}
