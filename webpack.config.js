var webpack = require('webpack');
var path = require('path');
// var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: './dist/app.js',
  // {
    // about: './dist/about',
    // contact: './dist/contact',
    // vendor: ['react', 'react-dom']
  // },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
    // path: path.join(__dirname, "build"),
    // filename: '[name].bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  // plugins: [
  //   new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  // ]
};