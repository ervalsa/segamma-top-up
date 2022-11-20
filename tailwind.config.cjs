/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true
        },
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            },
            colors: {
                'lightGray': '#2D2F3A',
                'darkBlue': '#1C1E24',
                'purleHaze': '#768AFF',
                'purlerRim': '#425DFF'
            },
        },
    },
    plugins: [],
};
