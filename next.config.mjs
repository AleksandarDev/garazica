import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack: (config, { isServer }) => {
        // Add alias for Next.js modules without .js extension
        config.resolve.alias = {
            ...config.resolve.alias,
            'next/link$': 'next/link.js',
            'next/image$': 'next/image.js',
            'next/router$': 'next/router.js',
        };

        // Find the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        );

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: /url/ }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        );

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/i;
        }

        return config;
    },
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
