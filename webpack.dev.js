const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


const EnvironmentConfig = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('development')
    }
});


module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        EnvironmentConfig,
        new webpack.HotModuleReplacementPlugin()
    ]
});
