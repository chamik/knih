module.exports = {
    mode: 'jit',
    content: [
        './build/**/*.{js,html}',
        './_site/**/*.{js,html}',
        './src/**/*.{js,html}',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                'serif': ['Lora', 'serif']
            },
            colors: {
                'pale': '#DCD7C9',
                'brown': '#A27B5C',
                'secondary': '#3F4E4F',
                'secondary-dark': '#2C3639',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}