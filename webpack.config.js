var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    'polyfills': ['es6-shim/es6-shim.js', 'angular2/bundles/angular2-polyfills'],
    'vendor': './src/vendor.ts',
    'main': './src/main.ts'
  },
  output: {
    path: 'dist',
    filename: 'js/[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: 'body',
    chunksSortMode: packageSort(['polyfills', 'vendor', 'main'])
  })]
}

function packageSort(packages) {
  // packages = ['polyfills', 'vendor', 'app']
  var len = packages.length - 1;
  var first = packages[0];
  var last = packages[len];
  return function sort(a, b) {
    // polyfills always first
    if (a.names[0] === first) {
      return -1;
    }
    // main always last
    if (a.names[0] === last) {
      return 1;
    }
    // vendor before app
    if (a.names[0] !== first && b.names[0] === last) {
      return -1;
    } else {
      return 1;
    }
  }
}
