const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //打开浏览器
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = 9001;

const webpackConfig = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './src',
        port: port
    },
    target: 'web',
    entry: {
        common: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:' + port,
            './src/index.jsx'
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'react-router',
            'react-router-redux',
            'whatwg-fetch', //fetch polyfill
            'babel-polyfill', //babel-polyfill
        ]
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: [
                    ["antd", { "style": 'css' }]
                ]
            }
        }, {
            test: /\.css$/,
            include: /node_modules/,
            exclude: './src/',
            loader: 'style!css',
        }, {
            test: /\.less$/,
            loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!less'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10&minetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10&minetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10&minetype=image/svg+xml'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname, // An absolute path for the root.
            verbose: true, // Write logs to console.
            dry: false // Do not delete anything, good for testing.
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            title: 'learn redux',
            inject: true,
            hash: false,
            template: './src/index.html',
            favicon: './src/favicon.ico'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:' + port
        }),
        //注入变量
        new webpack.DefinePlugin({
            'process.env': {
                'CLIENT': JSON.stringify(true),
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV) //将Node环境设置为production使react使用正确的版本
            }
        })
    ]
};

module.exports = webpackConfig;
