const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: "web",

    entry: './client/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: "/",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
        }),
    ],
};
