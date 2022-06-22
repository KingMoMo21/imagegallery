const tailwindcss = require("tailwindcss");

module.exports = {
    plugins: [
        tailwindcss("./tailwind.js"),
        require("autoprefixer")
    ],
    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
        './src/App.js',
        './src/**/*.js',
    ],
}