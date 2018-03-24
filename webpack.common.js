const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);


module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        modules: [
            path.resolve('./client'),
            path.resolve('./node_modules')
        ],
        alias: {
            commons: path.resolve('./client/commons.less')
        },
        extensions: [
            '.js',
            '.jsx',
            '.css',
            '.less'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {limit: 10000}
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        CleanWebpackPluginConfig
    ]
};
