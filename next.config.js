/** @type {import('next').NextConfig} */
module.exports = {
    distDir: process.env.BUILD_DIR ? process.env.BUILD_DIR : '.next',
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false,
                path: false,
                stream: false,
                http: false,
                https: false,
                url: false,
            },
        }

        return config
    },
}
