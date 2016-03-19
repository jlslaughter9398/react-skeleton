const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'public/js')
};

const common = {

    // Entry accepts a path or an object of entries. We'll be using the
    // latter form given it's convenient with more complex configurations.
    /*
     entry: {
     app: PATHS.app
     },
     */
    entry: './src/main.jsx',
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                // pre-process every *.js file (except for ones in
                // node_modules/) with Babel:
                test: /\.jsx?$/,
                //exclude: /node_modules/,
                include: PATHS.app,
                loader: 'babel-loader?cacheDirectory&presets[]=react'
            }
        ]
    }
};


// Default configuration
if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map'
    });
}

if(TARGET === 'build') {
    module.exports = merge(common, {});
}