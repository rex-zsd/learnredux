var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清理插件
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //打开浏览器

var fs = require('fs');
var path = require('path');
var dirs = fs.readdirSync(path.resolve(__dirname, 'src/routes/'));
fs.writeFileSync(path.resolve(__dirname, 'src/pages.json'), JSON.stringify(dirs, null, 4));

module.exports = {
    target: 'web',
    entry: {
        common: [
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
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : '',
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
            title: 'ttt',
            inject: true,
            hash: false,
            template: './src/index.html',
            favicon: './src/favicon.ico'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        //注入变量
        new webpack.DefinePlugin({
            'process.env': {
                'CLIENT': JSON.stringify(true),
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV) //将Node环境设置为production使react使用正确的版本
            }
        }),
        // //将模块加载到全局，其他模块可直接引用
        // new webpack.ProvidePlugin({
        //     'React': 'react'
        // })
    ]
};
