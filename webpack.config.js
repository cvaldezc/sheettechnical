var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const CONFIG = [{
    entry: './public/css/auth.scss',
    module: {
        loaders: [
            // {
            //     test: /\.tsx?$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    // resolve: {
    //     extensions: [".tsx", ".ts", ".js", ".scss"]
    // },
    output: {
        path: path.join(__dirname, 'public/css/'),
        filename: 'auth.js'
    },
    // devtool: 'inline-source-map',
    plugins: [
        new ExtractTextPlugin('public/css/auth.css', {allChunks: true})
    ]
}, {

}]

module.exports = Object.assign({}, CONFIG);