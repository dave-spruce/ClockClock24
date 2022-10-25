/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'inner-lg': 'inset 0 4px 8px 0 rgb(0 0 0 / 0.05)',
            },
        },
    },
    plugins: [],
};
