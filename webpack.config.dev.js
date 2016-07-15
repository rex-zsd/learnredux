const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //打开浏览器

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
            'es5-shim'
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
            test: /\.(jpe?g|gif|png|svg)$/i,
            loader: 'url-loader?limit=10000',
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: Infinity,
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
        new OpenBrowserPlugin({
            url: 'http://localhost:' + port
        }),
        //注入变量
        new webpack.DefinePlugin({
            'process.env': {
                'CLIENT': JSON.stringify(true),
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};

module.exports = webpackConfig;
