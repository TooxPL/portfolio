const webpack = require('webpack');
const path    = require('path');

const clean_webpack_plugin    = require('clean-webpack-plugin');
const html_webpack_plugin     = require('html-webpack-plugin');
const mini_css_extract_plugin = require('mini-css-extract-plugin');
const compression_plugin      = require('compression-webpack-plugin');
const vue_loader_plugin       = require('vue-loader/lib/plugin');

const my_meta = {
  'charset'        : 'utf-8',
  'X-UA-Compatible': 'IE=edge',
  'viewport'       : 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
  'theme-color'    : '#FFF'
}

module.exports = {
  mode: 'development',
  entry: {
    index : './src/main/main.ts'
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
      hot: true
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
            minimize: true
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
          test: /\.scss$/,
          use: [
              'vue-style-loader',
              process.env.NODE_ENV !== 'production' ? 'style-loader' : mini_css_extract_plugin.loader,
              {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
              },
              "sass-loader"
          ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
          test: /\.(png|jpg|gif|ico)$/,
          use: [{
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'graphics/'
              },
          }]
      },
      {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
          }]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'vue-svg-loader',
            options: {
              svgo: {
                plugins: [{
                  prefixIds: true
                }]
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '*', '.tsx', '.ts', '.js', '.vue', '.json', 'jsx' ],
    alias: {
      '@': path.resolve('src'),
      jquery: "jquery/src/jquery",
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  plugins: [
    new vue_loader_plugin(),
    new html_webpack_plugin({
      template: './src/index.html',
      filename: './index.html',
      excludeChunks: [ 'server' ],
      meta: my_meta
    }),
    new compression_plugin({
      test: /\.js(\?.*)?$/i,
      include: /\/includes/,
      exclude: /\/excludes/,
      cache: true,
      filename: '[path].gz[query]'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new mini_css_extract_plugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash',
      Vue: ['vue/dist/vue.esm.js', 'default']
    })
  ],
  optimization: {
    usedExports: true,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};