// webpack needs to be explicitly required
const webpack = require('webpack');
const dotenv = require('dotenv');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

// Loads environment for 'development'
const environment = dotenv.config();

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 9000,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(environment.parsed)
        }),
    ]
});
