import { config } from '@signalco/ui-themes-minimal/config';
import tailwindcssTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const tailwindConfig: Config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        // Include Signalco UI packages in content scan
        './node_modules/@signalco/ui/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@signalco/ui-primitives/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    presets: [config], // Use Signalco theme preset
    plugins: [tailwindcssAnimate, tailwindcssTypography],
};

export default tailwindConfig;
