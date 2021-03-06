const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const EnvironmentConfig = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
});

const UglifyJSPluginConfig = new UglifyJSPlugin({
    mangle: true,
    compress: {
        unused: true,
        dead_code: true,
        warnings: false
    }
});


module.exports = merge(common, {
    output: {
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        EnvironmentConfig,
        UglifyJSPluginConfig
    ]
});
