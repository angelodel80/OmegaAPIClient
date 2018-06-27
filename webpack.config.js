const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js',

    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist', 'assets'),
        publicPath: '/assets',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
    },
};