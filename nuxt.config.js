import webpack from 'webpack';
const path = require('path');

export default {
    plugins: [
        'plugins/vue-scroll.js',
    ],
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
            from: '^.*(?<!\/)$',
            to: (from, req) => req.url + '/',
            statusCode: 301
        },
    ],
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
