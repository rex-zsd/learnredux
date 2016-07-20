var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清理插件
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html

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
      'isomorphic-fetch', //fetch polyfill
      'babel-polyfill', //babel-polyfill
      'es5-shim'
    ]
  },
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
      title: 'learn redux',
      inject: true,
      hash: true,
      template: './src/index.html',
      favicon: './src/static/favicon.ico',
      minify: {
        collapseWhitespace: true
      }
    }),
    //注入变量
    new webpack.DefinePlugin({
      'process.env': {
        'CLIENT': JSON.stringify(true),
        'NODE_ENV': JSON.stringify('production') //将Node环境设置为production使react使用正确的版本
      }
    }),
    //压缩js
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  ]
};
