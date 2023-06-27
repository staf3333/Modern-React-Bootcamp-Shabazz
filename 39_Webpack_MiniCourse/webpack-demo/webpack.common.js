const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3. inject styles into DOM
                    'css-loader', // 2. turns css into commonjs
                    'sass-loader' // 1. turns sass into css
                ]
            }
        ]
    },
};