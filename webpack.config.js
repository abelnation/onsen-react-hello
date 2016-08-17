
var path = require('path');

var BASE_DIR = __dirname;
var SRC_DIR = path.resolve(BASE_DIR, 'js');
var BUILD_DIR = path.resolve(BASE_DIR, 'dist');

module.exports = {
    context: SRC_DIR,
    entry: './main.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.*\.js(x?)$/,
                loader: 'babel-loader',
                exclude: /(dist|node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
    },

    devtool: 'source-map',
    devServer: {
        contentBase: '.'
    }
};
