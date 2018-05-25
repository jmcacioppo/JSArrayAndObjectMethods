const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname),
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'css'),
                exclude: '/node_modules/',
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};