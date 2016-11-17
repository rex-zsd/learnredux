const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const babelQuery = JSON.parse(fs.readFileSync('./.babelrc'));

const webpackConfig = {
    target: 'web',
    entry: {
        common: ['./src/index.jsx'],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'react-router',
            'react-router-redux',
            'isomorphic-fetch',
            'babel-polyfill',
            'es5-shim'
        ]
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: babelQuery
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            include: /node_modules/,
            exclude: './src/',
            loader: 'style!css!postcss'
        }, {
            test: /\.less$/,
            loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less'
        }, {
            test: /\.(jpe?g|gif|png|svg)$/i,
            loader: 'url-loader?limit=10000'
        }]
    },
    postcss: function() {
        return [autoprefixer({
            browsers: ['> 5%']
        })];
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            title: 'learn redux',
            inject: true,
            hash: true,
            template: './src/index.html',
            favicon: './src/static/favicon.ico',
            minify: {
                collapseWhitespace: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'CLIENT': JSON.stringify(true),
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};

module.exports = webpackConfig;
