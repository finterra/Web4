const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['env', 'stage-0']
        }
    }],
    
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
],
  node:{
    fs:"empty"
  }
}
