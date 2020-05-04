const withPlugins = require('next-compose-plugins');
const withImages = require("next-images");
const withPWA = require('next-pwa')

const imagesCongfig = [withImages];
const pwaConfig = [withPWA, {
    pwa: {
        dest: 'public'
    }
}];

module.exports = withPlugins([
    imagesCongfig,
    pwaConfig
]);
