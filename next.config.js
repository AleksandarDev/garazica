const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

const imagesCongfig = [withImages];
const pwaConfig = [withPWA, {
    pwa: {
        disable: true,
        dest: 'public',
    },
    pageExtensions: ['tsx', 'mdx'],
}];

const nextConfig = {
    reactStrictMode: false,
    swcMinify: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: "@svgr/webpack",
                    options: { babel: false },
                },
            ],
        });
        return config;
    },
};

module.exports = withPlugins([
    imagesCongfig,
    pwaConfig,
    withMDX
], nextConfig);
