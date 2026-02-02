/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            colors: {
                brand: {
                    orange: '#F36F21',
                    purple: '#662D91',
                    dark: '#1a0b2e',
                    light: '#f8fafc'
                }
            }
        },
    },
    plugins: [],
}
