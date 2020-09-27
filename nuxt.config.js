import webpack from 'webpack';
const path = require('path');

export default {
    build: {
        dir: 'docs',
        plugins: [
            new webpack.ProvidePlugin({
                // global modules
                _: 'lodash'
            }),
        ],
        postcss: {
            plugins: {
                'postcss-import': {},
                tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
                'postcss-nested': {}
            }
        },
        preset: {
            stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
        }
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
        'nuxt-purgecss',
    ],
    css: [
        '@/assets/css/style.css',
    ],
    purgeCSS: {
        mode: 'postcss',
        enabled: (process.env.NODE_ENV === 'production')
    },
    target: 'static',
    components: true
}
