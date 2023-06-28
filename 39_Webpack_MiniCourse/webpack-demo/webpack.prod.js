const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        clean: true,
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extract css into files
                    'css-loader', // 2. turns css into commonjs
                    'sass-loader' // 1. turns sass into css
                ]
            },
        ]
    }
});