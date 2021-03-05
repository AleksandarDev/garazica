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

const nextConfig = { };

module.exports = withPlugins([
  imagesCongfig,
  pwaConfig,
  withMDX
], nextConfig);
