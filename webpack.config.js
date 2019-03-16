const path                 = require('path');
const webpack              = require('webpack');
const node_externals       = require('webpack-node-externals');
const html_web_pack_plugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    server: './server.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [ node_externals() ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      }
    ]
  },
  plugins: [
    new html_web_pack_plugin({
      template: "./index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    })
  ]
}