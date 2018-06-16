var
  path = require('path'),
  WebpackNotifierPlugin = require('webpack-notifier'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  BUILD_DIR = path.resolve(__dirname, 'build'),
  APP_DIR = path.resolve(__dirname, 'src/js');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
    new ExtractTextPlugin({filename: 'style.css'})
  ],
  resolve: {
    alias: {
      app: APP_DIR
    },
    enforceExtension: false,
    extensions: ['.js', '.jsx', '.scss']
  }
};
