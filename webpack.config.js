const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
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
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
        },
        {
            reload: false
        })
    ],
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