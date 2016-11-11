require('es6-promise').polyfill();

var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        index: './components/index.js',
        login: './components/login.js' 
    },
    output: {
        path: path.join(__dirname, "./dist/static/js"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2016', 'react']
                }
            },
            {   test: /\.(gif|jpg|jpeg|png)$/,
                loader: 'url-loader?limit=20000' // >20kb ? use file-loader
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin('commons', 'commons.bundle.js')
    ]
}
